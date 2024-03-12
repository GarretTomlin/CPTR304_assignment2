<?php
session_start();
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token");

function validateInput($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

$response = array();


if ($_SERVER["REQUEST_METHOD"] == "OPTIONS") {
    header('HTTP/1.1 200 OK');
    exit();
    
} elseif ($_SERVER["REQUEST_METHOD"] == "GET") {
    if (isset($_SESSION["username"])) {
        $response['status'] = 'success';
        $response['message'] = 'Session is active';
        $response['username'] = $_SESSION["username"];
        http_response_code(200);
    } else {
        $response['status'] = 'error';
        $response['message'] = 'Session not set';
        http_response_code(401); 
    }

}elseif ($_SERVER["REQUEST_METHOD"] == "POST") {
    $input_data = json_decode(file_get_contents('php://input'), true);

    if (isset($input_data["action"])) {
        $action = validateInput($input_data["action"]);

        if ($action === "register") {
            $errors = array();

            $first_name = validateInput($input_data["firstname"]);
            $last_name = validateInput($input_data["lastname"]);
            $email = validateInput($input_data["email"]);
            $username = validateInput($input_data["username"]);
            $password = validateInput($input_data["password"]);

            if (empty($first_name) || empty($last_name) || empty($email) || empty($username) || empty($password)) {
                $errors[] = "All fields are required.";
            }

            if (strlen($password) < 8) {
                $errors[] = "Password must be at least 8 characters long.";
            }

            if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                $errors[] = "Invalid email format.";
            }

            if (empty($errors)) {
                $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

                $userData = "$first_name,$last_name,$email,$username,$hashedPassword\n";

                file_put_contents("register.txt", $userData, FILE_APPEND);

                $_SESSION["username"] = $username;

                setcookie("username", $username, time() + (86400 * 30), "/");

                $response['status'] = 'success';
                $response['message'] = 'Registration successful.';
                http_response_code(201);
            } else {
                $response['status'] = 'error';
                $response['message'] = $errors;
                http_response_code(400); 
            }
        } elseif ($action === "login") {
            
            $errors = array();

            $username = validateInput($input_data["username"]);
            $password = validateInput($input_data["password"]);

            if (empty($username) || empty($password)) {
                $errors[] = "Both username and password are required.";
            }

            $registeredUsers = file("register.txt", FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);

            foreach ($registeredUsers as $user) {
                $userData = explode(",", $user);

                if (count($userData) === 5) {
                    list($storedFirstName, $storedLastName, $storedEmail, $storedUsername, $storedPassword) = $userData;

                    if ($username == $storedUsername && password_verify($password, $storedPassword)) {
                        $_SESSION["username"] = $username;

                        setcookie("username", $username, time() + (86400 * 30), "/");

                        $response['status'] = 'success';
                        $response['message'] = 'Login successful.';
                        http_response_code(200); 
                        break;
                    }
                }
            }

            if (empty($response)) {
                $errors[] = "Invalid username or password.";
                $response['status'] = 'error';
                $response['message'] = $errors;
                http_response_code(401);
            }
        } else {
            $response['status'] = 'error';
            $response['message'] = 'Invalid action.';
            http_response_code(400);
        }
    } else {
        $response['status'] = 'error';
        $response['message'] = 'Invalid action.';
        http_response_code(400); 
    }
} else {
    $response['status'] = 'error';
    $response['message'] = 'Invalid request method.';
    http_response_code(400); 
}

echo json_encode($response);
?>

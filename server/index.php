<?php
header("Content-Type: application/json");

session_start();

function getUserData($username) {
    $userData = file_get_contents("users.txt");
    $users = explode("\n", $userData);

    foreach ($users as $user) {
        $userArray = json_decode($user, true);
        if ($userArray && $userArray['username'] === $username) {
            return $userArray;
        }
    }

    return null;
}

function saveUserData($userData) {
    $userArray = [
        'firstname' => $userData['firstname'],
        'lastname' => $userData['lastname'],
        'email' => $userData['email'],
        'username' => $userData['username'],
        'password' => password_hash($userData['password'], PASSWORD_DEFAULT),
    ];

    file_put_contents("users.txt", json_encode($userArray) . "\n", FILE_APPEND);
}

function handleLogin($data) {
    if (empty($data['username']) || empty($data['password'])) {
        return ["status" => "error", "code" => 1, "message" => "Please fill in all fields"];
    }

    $username = filter_var($data['username'], FILTER_SANITIZE_STRING);
    $password = filter_var($data['password'], FILTER_SANITIZE_STRING);

    $userData = getUserData($username);

    if ($userData && password_verify($password, $userData['password'])) {
        $_SESSION["username"] = $username;
        return ["status" => "success", "code" => 0, "message" => "Login successful"];
    } else {
        return ["status" => "error", "code" => 2, "message" => "Invalid username or password"];
    }
}

function handleRegistration($data) {
    if (empty($data['firstname']) || empty($data['lastname']) || empty($data['email']) || empty($data['username']) || empty($data['password']) || empty($data['password_confirmation'])) {
        return ["status" => "error", "code" => 1, "message" => "Please fill in all fields"];
    }

    $firstname = filter_var($data['firstname'], FILTER_SANITIZE_STRING);
    $lastname = filter_var($data['lastname'], FILTER_SANITIZE_STRING);
    $email = filter_var($data['email'], FILTER_VALIDATE_EMAIL);
    $username = filter_var($data['username'], FILTER_SANITIZE_STRING);
    $password = filter_var($data['password'], FILTER_SANITIZE_STRING);
    $password_confirmation = filter_var($data['password_confirmation'], FILTER_SANITIZE_STRING);

    if (strlen($password) < 8) {
        return ["status" => "error", "code" => 2, "message" => "Password should be at least 8 characters"];
    } elseif ($password !== $password_confirmation) {
        return ["status" => "error", "code" => 3, "message" => "Password and confirmation do not match"];
    }

    if (getUserData($username)) {
        return ["status" => "error", "code" => 4, "message" => "Username already exists"];
    }

    saveUserData([
        'firstname' => $firstname,
        'lastname' => $lastname,
        'email' => $email,
        'username' => $username,
        'password' => $password,
    ]);

    return ["status" => "success", "code" => 201, "message" => "Registration successful"];
}

try {
    if ($_SERVER["REQUEST_METHOD"] === "POST") {
        $data = json_decode(file_get_contents("php://input"), true);

        if (isset($data['action']) && $data['action'] === 'login') {
            $response = handleLogin($data);
        } elseif (isset($data['action']) && $data['action'] === 'register') {
            $response = handleRegistration($data);
        } else {
            $response = ["status" => "error", "code" => 500, "message" => "Invalid action"];
        }

        echo json_encode($response);
    } else {
        http_response_code(405);
        echo json_encode(["status" => "error", "code" => 6, "message" => "Invalid request method"]);
    }
} catch (Exception $e) {
    error_log("Error: " . $e->getMessage());
    echo json_encode(["status" => "error", "code" => 500, "message" => "An error occurred"]);
}
?>

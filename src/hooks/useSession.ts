'use client'
import { useState, useEffect } from 'react';

interface SessionData {
  status: string;
  username?: string;
}

const useSession = (): SessionData | null => {
  const [sessionData, setSessionData] = useState<SessionData | null>(null);

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const response = await fetch('http://localhost:8000/index.php', {
          method: 'GET',
          credentials: 'include',
        });
        if (response.ok) {
          const data: SessionData = await response.json();
          setSessionData(data);
        } else {
          console.error('Error fetching session:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching session:', error);
      }
    };

    fetchSession();
  }, []);

  return sessionData;
};

export default useSession;

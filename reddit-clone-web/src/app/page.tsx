"use client";

import { fetchData } from "@/lib/fetchData";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function Home() {
  const { data: session } = useSession();
  const [response, setResponse] = useState(null);

  useEffect(() => {
    const fetchDataAndUpdateState = async () => {
      if (session) {
        try {
          const response = await fetchData(session, `http://localhost:8080/api/v1/users/${session.user.id}`);
          const data = JSON.stringify(response);
          setResponse(response);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    };

    fetchDataAndUpdateState();
  }, [session]);

  return (
    <main>
      <h1>Home</h1>
      {session && (
        <>
          <h2>API Response: {JSON.stringify(response)}</h2>
        </>
      )}
    </main>
  );
}

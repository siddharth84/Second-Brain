// frontend/hooks/useContent.ts

import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

// Define a type for your content for better code quality
export type ContentType = "twitter" | "youtube";

interface Content {
  _id: string;
  title: string;
  link: string;
  type: ContentType; // Use the specific type here
}

export function useContent() {
  const [username, setUsername] = useState("");
  const [contents, setContents] = useState<Content[]>([]); // Use the Content type

  async function refresh() {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const headers = { Authorization: token };

      // Fetch user and content data in parallel for better performance
      const [userResponse, contentResponse] = await Promise.all([
        axios.get(`${BACKEND_URL}/api/v1/user/me`, { headers }),
        axios.get(`${BACKEND_URL}/api/v1/content`, { headers }),
      ]);

      // Set state with the fresh data from the server
      const fetchedUsername = userResponse.data.username;
      setUsername(fetchedUsername);
      localStorage.setItem("username", fetchedUsername); // Keep localStorage in sync

      setContents(contentResponse.data.content || []);

    } catch (e) {
      console.error("Failed to load data:", e);
      // You might want to log the user out if auth fails
      // handleLogout(); 
    }
  }

  useEffect(() => {
    refresh();
  }, []);

  return { contents, refresh, username };
}
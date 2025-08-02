// 📁 frontend/hooks/useContent.ts
import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

export function useContent() {
  const [contents, setContents] = useState([]);
  const [username, setUsername] = useState(localStorage.getItem("username") || "");

  async function refresh() {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/v1/content`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });

      const contentData = response.data.content || [];
      setContents(contentData);

      // Extract and set username from first content entry
      if (
        contentData.length > 0 &&
        contentData[0].userId &&
        typeof contentData[0].userId === "object" &&
        contentData[0].userId.username
      ) {
        const name = contentData[0].userId.username;
        console.log("Extracted username:", name);
        localStorage.setItem("username", name);
        setUsername(name);
      }
    } catch (e) {
      console.error("Failed to load content:", e);
    }
  }

  useEffect(() => {
    refresh();
    const interval = setInterval(refresh, 10 * 1000);
    return () => clearInterval(interval);
  }, []);

  return { contents, refresh, username };
}

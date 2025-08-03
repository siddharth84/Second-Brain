// 📁 frontend/pages/SharePage.tsx

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Card } from "../components/Card"; // Assuming you have this component
import { BACKEND_URL } from "../config";

// Define the structure of the data you expect
interface ContentItem {
  _id: string;
  title: string;
  link: string;
  type: "twitter" | "youtube"; // Or whatever types you support
}

export function SharePage() {
  // Get the unique hash from the URL (e.g., /share/aB1c2D3e)
  const { shareLink } = useParams<{ shareLink: string }>();
  
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState("");
  const [content, setContent] = useState<ContentItem[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!shareLink) return;

    axios.get(`${BACKEND_URL}/api/v1/brain/${shareLink}`)
      .then(response => {
        setUsername(response.data.username);
        setContent(response.data.content);
      })
      .catch(err => {
        console.error("Failed to fetch shared brain:", err);
        setError("Could not load this shared brain. The link may be invalid.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [shareLink]); // Re-run if the shareLink changes

  if (loading) {
    return <div className="p-10 text-center">Loading brain...</div>;
  }

  if (error) {
    return <div className="p-10 text-center text-red-500">{error}</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-2">
          {username}'s Brain
        </h1>
        <p className="text-center text-gray-600 mb-8">
          A collection of curated resources.
        </p>

        {content.length > 0 ? (
          <div className="flex gap-4 flex-wrap justify-center">
            {content.map(item => (
              <Card key={item._id} type={item.type} link={item.link} title={item.title} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">This brain doesn't have any content yet.</p>
        )}
      </div>
    </div>
  );
}
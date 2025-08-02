// frontend/pages/Dashboard.tsx

import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { CreateContentModal } from "../components/CreateContentModal";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { Sidebar } from "../components/Sidebar";
import { useContent } from "../hooks/useContent";
//const { contents, refresh, username } = useContent();
import { BACKEND_URL } from "../config";
import axios from "axios";

export function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const { contents, refresh, username } = useContent();

  // You can remove this useEffect hook. The one inside useContent is sufficient.
  // The state update within the useContent hook will cause a re-render here.
  // useEffect(() => {
  //   refresh();
  // }, [modalOpen]);

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    window.location.href = "/signin";
  }

  return (
    <div>
      <Sidebar />
      <div className="p-4 ml-72 min-h-screen bg-gray-100 border-2">
        <div className="flex justify-between items-center pb-4">
          <div className="text-gray-700 text-sm">
            Logged in as <span className="font-medium">{username || "Unknown"}</span>
          </div>
          <Button
            onClick={handleLogout}
            variant="secondary"
            text="Logout"
            startIcon={<></>}
          />
        </div>

        <CreateContentModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
        />

        <div className="flex justify-end gap-4">
          <Button
            onClick={() => setModalOpen(true)}
            variant="primary"
            text="Add content"
            startIcon={<PlusIcon />}
          />
          <Button
            onClick={async () => {
              const response = await axios.post(
                `${BACKEND_URL}/api/v1/brain/share`,
                { share: true },
                {
                  headers: {
                    Authorization: localStorage.getItem("token"),
                  },
                }
              );
              const shareUrl = `http://localhost:5173/share/${response.data.hash}`;
              alert(shareUrl);
            }}
            variant="secondary"
            text="Share brain"
            startIcon={<ShareIcon />}
          />
        </div>

        <div className="flex gap-4 flex-wrap pt-4">
    {/* Destructure _id and use it as the key */}
    {contents.map(({ _id, type, link, title }) => (
        <Card key={_id} type={type} link={link} title={title} />
    ))}
</div>
      </div>
    </div>
  );
}
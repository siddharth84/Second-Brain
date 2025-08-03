// 📁 frontend/components/SidebarItem.tsx

import { ReactNode } from 'react';

// Define the component's props
interface SidebarItemProps {
  text: string;
  icon: ReactNode;
  isActive: boolean;
  onClick: () => void;
}

export function SidebarItem({ text, icon, isActive, onClick }: SidebarItemProps) {
  // Define styles for active vs. inactive states
  const activeClass = 'bg-purple-100 text-purple-700';
  const inactiveClass = 'hover:bg-gray-100';

  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center p-2 rounded-lg mb-2 ${isActive ? activeClass : inactiveClass}`}
    >
      <div className="pr-2">
        {icon}
      </div>
      <div className="font-medium">
        {text}
      </div>
    </button>
  );
}
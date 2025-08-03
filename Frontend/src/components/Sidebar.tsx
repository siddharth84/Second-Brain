// 📁 frontend/components/Sidebar.tsx

import { Logo } from "../icons/Logo";
import { TwitterIcon } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { SidebarItem } from "./Sidebaritem";

// A simple icon for the "All" category
const AllIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

// The props interface for the Sidebar
interface SidebarProps {
  activeFilter: 'all' | 'youtube' | 'twitter';
  setActiveFilter: (filter: 'all' | 'youtube' | 'twitter') => void;
}

export function Sidebar({ activeFilter, setActiveFilter }: SidebarProps) {
    return <div className="h-screen bg-white border-r w-72 fixed left-0 top-0 pl-6">
        <div className="flex text-2xl pt-8 items-center">
            <div className="pr-2 text-purple-600">
                <Logo />
            </div>
            Brainly
        </div>
        <div className="pt-8 pl-4">
            {/* These items now control the filter state in the parent component */}
            <SidebarItem 
              text="All Content" 
              icon={<AllIcon />} 
              isActive={activeFilter === 'all'}
              onClick={() => setActiveFilter('all')}
            />
            <SidebarItem 
              text="Twitter" 
              icon={<TwitterIcon />}
              isActive={activeFilter === 'twitter'}
              onClick={() => setActiveFilter('twitter')}
            />
            <SidebarItem 
              text="Youtube" 
              icon={<YoutubeIcon />}
              isActive={activeFilter === 'youtube'}
              onClick={() => setActiveFilter('youtube')}
            />
        </div>
    </div>
}
import React from 'react';
import { Mail, Inbox, Send, Star, Trash2 } from 'lucide-react';

interface SidebarProps {
  darkMode: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ darkMode }) => {
  const menuItems = [
    { icon: Inbox, label: 'Inbox', count: 12 },
    { icon: Star, label: 'Starred', count: 3 },
    { icon: Send, label: 'Sent', count: 0 },
    { icon: Trash2, label: 'Trash', count: 0 },
  ];

  return (
    <div className={`w-64 ${darkMode ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-800'} 
      border-r ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
      <div className="p-4">
        <button className="w-full bg-blue-600 text-white rounded-lg p-3 flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors">
          <Mail className="w-5 h-5" />
          <span>Compose</span>
        </button>
      </div>
      <nav>
        {menuItems.map((item) => (
          <a
            key={item.label}
            href="#"
            className={`flex items-center justify-between px-4 py-3 ${
              darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
            }`}
          >
            <div className="flex items-center gap-3">
              <item.icon className={`w-5 h-5 ${item.label === 'Inbox' ? 'text-blue-600' : ''}`} />
              <span>{item.label}</span>
            </div>
            {item.count > 0 && (
              <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                {item.count}
              </span>
            )}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
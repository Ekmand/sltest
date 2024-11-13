import React, { useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import Sidebar from './Sidebar';
import EmailList from './EmailList';
import EmailView from './EmailView';
import OTPSection from './OTPSection';

interface EmailClientProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const EmailClient: React.FC<EmailClientProps> = ({ darkMode, setDarkMode }) => {
  const [selectedEmail, setSelectedEmail] = useState<number | null>(null);

  return (
    <div className={`h-screen flex flex-col ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      {/* Theme Toggle */}
      <div className={`flex justify-end p-4 ${darkMode ? 'bg-gray-800' : 'bg-white'} border-b ${
        darkMode ? 'border-gray-700' : 'border-gray-200'
      }`}>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`p-2 rounded-full ${
            darkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-600'
          }`}
        >
          {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </div>

      {/* OTP Section */}
      <OTPSection darkMode={darkMode} />

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        <Sidebar darkMode={darkMode} />
        <EmailList
          darkMode={darkMode}
          selectedEmail={selectedEmail}
          setSelectedEmail={setSelectedEmail}
        />
        <EmailView darkMode={darkMode} selectedEmail={selectedEmail} />
      </div>
    </div>
  );
};

export default EmailClient;
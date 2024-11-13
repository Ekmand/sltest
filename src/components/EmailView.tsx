import React from 'react';

interface EmailViewProps {
  darkMode: boolean;
  selectedEmail: number | null;
}

const EmailView: React.FC<EmailViewProps> = ({ darkMode, selectedEmail }) => {
  if (!selectedEmail) {
    return (
      <div className={`flex-1 flex items-center justify-center ${
        darkMode ? 'text-gray-400' : 'text-gray-500'
      }`}>
        Select an email to view its contents
      </div>
    );
  }

  return (
    <div className={`flex-1 p-6 overflow-y-auto ${
      darkMode ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-800'
    }`}>
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Security alert: new sign-in from unknown device</h2>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white`}>
              GH
            </div>
            <div>
              <div className="font-semibold">GitHub Security</div>
              <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                security@github.com
              </div>
            </div>
          </div>
          <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            Mar 15, 2024, 10:45 AM
          </div>
        </div>
        <div className={`prose ${darkMode ? 'prose-invert' : ''} max-w-none`}>
          <p>Hello,</p>
          <p>We noticed a new sign-in to your account from an unknown device. Here are the details:</p>
          <ul>
            <li>Location: San Francisco, CA, USA</li>
            <li>Device: Chrome on macOS</li>
            <li>Time: March 15, 2024, 10:45 AM PST</li>
          </ul>
          <p>If this was you, you can disregard this email. If you don't recognize this activity, please reset your password immediately and enable two-factor authentication.</p>
          <p>Best regards,<br />GitHub Security Team</p>
        </div>
      </div>
    </div>
  );
};

export default EmailView;
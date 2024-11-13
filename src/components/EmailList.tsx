import React from 'react';

interface EmailListProps {
  darkMode: boolean;
  selectedEmail: number | null;
  setSelectedEmail: (id: number | null) => void;
}

const EmailList: React.FC<EmailListProps> = ({ darkMode, selectedEmail, setSelectedEmail }) => {
  const emails = [
    {
      id: 1,
      sender: 'GitHub',
      subject: 'Security alert: new sign-in from unknown device',
      preview: 'We noticed a new sign-in to your account from an unknown device...',
      time: '10:45 AM',
      unread: true,
    },
    {
      id: 2,
      sender: 'Amazon AWS',
      subject: 'Your AWS account password reset',
      preview: 'We received a request to reset the password for your AWS account...',
      time: '9:30 AM',
      unread: true,
    },
    {
      id: 3,
      sender: 'Stripe',
      subject: 'New login notification',
      preview: 'A new login was detected on your Stripe account...',
      time: 'Yesterday',
      unread: false,
    },
  ];

  return (
    <div className={`w-96 overflow-y-auto border-r ${
      darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
    }`}>
      {emails.map((email) => (
        <div
          key={email.id}
          onClick={() => setSelectedEmail(email.id)}
          className={`p-4 cursor-pointer ${
            selectedEmail === email.id
              ? darkMode
                ? 'bg-gray-700'
                : 'bg-blue-50'
              : darkMode
              ? 'hover:bg-gray-700'
              : 'hover:bg-gray-50'
          } ${
            email.unread ? 'font-semibold' : ''
          }`}
        >
          <div className="flex justify-between items-start mb-1">
            <span className={`${darkMode ? 'text-gray-200' : 'text-gray-900'}`}>
              {email.sender}
            </span>
            <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              {email.time}
            </span>
          </div>
          <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-900'}`}>
            {email.subject}
          </div>
          <div className={`text-sm truncate ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            {email.preview}
          </div>
        </div>
      ))}
    </div>
  );
};

export default EmailList;
import React from 'react';
import { Key } from 'lucide-react';

interface OTPSectionProps {
  darkMode: boolean;
}

const OTPSection: React.FC<OTPSectionProps> = ({ darkMode }) => {
  const otpCodes = [
    { service: 'GitHub', code: '123 456', expiresIn: '2:45' },
    { service: 'AWS', code: '789 012', expiresIn: '4:12' },
  ];

  if (otpCodes.length === 0) return null;

  return (
    <div className={`border-b ${
      darkMode ? 'bg-gray-800 border-gray-700' : 'bg-blue-50 border-blue-100'
    }`}>
      <div className="max-w-7xl mx-auto p-3">
        <div className="flex items-center gap-2 mb-2">
          <Key className="w-4 h-4 text-blue-600" />
          <span className={`text-sm font-medium ${
            darkMode ? 'text-gray-200' : 'text-gray-700'
          }`}>
            Active OTP Codes
          </span>
        </div>
        <div className="flex gap-4">
          {otpCodes.map((otp) => (
            <div
              key={otp.service}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg ${
                darkMode ? 'bg-gray-700' : 'bg-white'
              }`}
            >
              <div>
                <div className={`text-sm font-medium ${
                  darkMode ? 'text-gray-200' : 'text-gray-700'
                }`}>
                  {otp.service}
                </div>
                <div className="text-lg font-mono font-bold text-blue-600">
                  {otp.code}
                </div>
              </div>
              <div className={`text-xs ${
                darkMode ? 'text-gray-400' : 'text-gray-500'
              }`}>
                Expires in {otp.expiresIn}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OTPSection;
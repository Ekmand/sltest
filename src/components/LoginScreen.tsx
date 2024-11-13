import React, { useState, useEffect } from 'react';
import { ShieldCheck, Moon, Sun, Mail, Lock } from 'lucide-react';

interface LoginScreenProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
  onLogin: (email: string, password: string) => void;
}

declare global {
  interface Window {
    google?: {
      accounts: {
        id: {
          initialize: (config: any) => void;
          renderButton: (element: HTMLElement, config: any) => void;
          prompt: (momentListener?: any) => void;
          disableAutoSelect: () => void;
        };
      };
    };
  }
}

const LoginScreen: React.FC<LoginScreenProps> = ({
  darkMode,
  setDarkMode,
  onLogin,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const initializeGoogleSignIn = () => {
      if (window.google?.accounts) {
        // Disable auto-select to prevent multiple prompts
        window.google.accounts.id.disableAutoSelect();
        
        window.google.accounts.id.initialize({
          client_id: '533121544635-ckt0fvuot2ah3jhc07hsnq9ujtidpob6.apps.googleusercontent.com',
          callback: handleGoogleResponse,
          auto_select: false, // Disable auto-select
        });

        const buttonDiv = document.getElementById('googleSignInDiv');
        if (buttonDiv) {
          window.google.accounts.id.renderButton(buttonDiv, {
            theme: darkMode ? 'filled_black' : 'outline',
            size: 'large',
            width: '100%',
            text: 'signin_with',
            shape: 'rectangular',
            click_listener: () => {
              // Custom click handler to ensure single prompt
              window.google.accounts.id.prompt((notification: any) => {
                if (notification.isNotDisplayed() || notification.isSkippedMoment()) {
                  // If the prompt is not displayed or skipped, handle accordingly
                  console.log('Google Sign-In prompt not displayed or skipped');
                }
              });
            },
          });
        }
      }
    };

    initializeGoogleSignIn();
  }, [darkMode]);

  const handleGoogleResponse = (response: any) => {
    const credential = response.credential;
    // Here you would typically send this credential to your backend
    console.log('Google Sign-In successful:', credential);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <div className="absolute top-4 right-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`p-2 rounded-full ${
            darkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-600'
          }`}
        >
          {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </div>

      <div className="flex min-h-screen items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className={`w-full max-w-md space-y-8 ${
          darkMode ? 'bg-gray-800' : 'bg-white'
        } p-8 rounded-2xl shadow-xl`}>
          <div className="text-center">
            <div className="flex justify-center">
              <ShieldCheck className="w-12 h-12 text-blue-600" />
            </div>
            <h2 className={`mt-4 text-3xl font-bold tracking-tight ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              seemslegit<span className="text-sm">.email</span>
            </h2>
            <p className={`mt-2 text-sm ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Sign in to access your totally secure inbox
            </p>
          </div>

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4 rounded-md">
              <div className="relative">
                <Mail className={`absolute left-3 top-3 h-5 w-5 ${
                  darkMode ? 'text-gray-400' : 'text-gray-500'
                }`} />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`block w-full rounded-lg pl-10 pr-3 py-2.5 text-sm ${
                    darkMode
                      ? 'bg-gray-700 text-white placeholder-gray-400 border-gray-600'
                      : 'bg-gray-50 text-gray-900 placeholder-gray-500 border-gray-300'
                  } border focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  placeholder="Email address"
                />
              </div>

              <div className="relative">
                <Lock className={`absolute left-3 top-3 h-5 w-5 ${
                  darkMode ? 'text-gray-400' : 'text-gray-500'
                }`} />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`block w-full rounded-lg pl-10 pr-3 py-2.5 text-sm ${
                    darkMode
                      ? 'bg-gray-700 text-white placeholder-gray-400 border-gray-600'
                      : 'bg-gray-50 text-gray-900 placeholder-gray-500 border-gray-300'
                  } border focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  placeholder="Password"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-lg bg-blue-600 px-3 py-2.5 text-sm font-semibold text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Sign in
              </button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className={`w-full border-t ${
                  darkMode ? 'border-gray-700' : 'border-gray-300'
                }`}></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className={`px-2 ${
                  darkMode ? 'bg-gray-800 text-gray-400' : 'bg-white text-gray-500'
                }`}>
                  Or continue with
                </span>
              </div>
            </div>

            <div id="googleSignInDiv" className="w-full"></div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
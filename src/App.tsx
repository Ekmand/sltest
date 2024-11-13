import React, { useState } from 'react';
import LoginScreen from './components/LoginScreen';
import EmailClient from './components/EmailClient';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (email: string, password: string) => {
    // In a real app, you would validate credentials here
    console.log('Login attempted with:', email);
    setIsAuthenticated(true);
  };

  return isAuthenticated ? (
    <EmailClient darkMode={darkMode} setDarkMode={setDarkMode} />
  ) : (
    <LoginScreen
      darkMode={darkMode}
      setDarkMode={setDarkMode}
      onLogin={handleLogin}
    />
  );
}

export default App;
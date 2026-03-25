import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
﻿import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { CompanyRegistration } from './pages/CompanyRegistration';
import { CompanyDashboard } from './pages/CompanyDashboard';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import './index.css';

const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <ThemeProvider>
          <AuthProvider>
            <div className="min-h-screen bg-gray-50">
              <CompanyRegistration />
            </div>
          </AuthProvider>
        </ThemeProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
};

const container = document.getElementById('root');
if (!container) {
  throw new Error('Failed to find the root element');
}

const root = createRoot(container);
root.render(<App />);


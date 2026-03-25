<<<<<<< HEAD
import Dashboard from './components/Dashboard';
function App() { return <Dashboard />; }
export default App;
=======
import React from 'react';
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
>>>>>>> ce394b553fba7a911f2cefdeb4d60912302943c0

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import AccountSettingsPage from './pages/AccountSettingsPage';

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen w-screen bg-gray-100">
      <div className="bg-white w-full max-w-md shadow-lg">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/account-settings" element={<AccountSettingsPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
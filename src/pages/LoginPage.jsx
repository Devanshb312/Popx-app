import Login from '../components/Login';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();
  
  const handleLogin = (credentials) => {
    // In a real app, you would validate credentials here
    navigate('/account-settings');
  };

  const navigateTo = (screen) => {
    if (screen === 'welcome') navigate('/');
  };

  return <Login navigateTo={navigateTo} onLogin={handleLogin} />;
}

export default LoginPage; 
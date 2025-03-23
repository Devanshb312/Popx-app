import Welcome from '../components/Welcome';
import { useNavigate } from 'react-router-dom';

function WelcomePage() {
  const navigate = useNavigate();
  
  const navigateTo = (screen) => {
    if (screen === 'login') navigate('/login');
    if (screen === 'signup') navigate('/signup');
  };

  return <Welcome navigateTo={navigateTo} />;
}

export default WelcomePage;
import Signup from '../components/Signup';
import { useNavigate } from 'react-router-dom';

function SignupPage() {
  const navigate = useNavigate();
  
  const handleSignup = (formData) => {
    // In a real app, you would process the signup here
    // For now, store in localStorage as a simple example
    localStorage.setItem('userData', JSON.stringify(formData));
    navigate('/account-settings');
  };

  const navigateTo = (screen) => {
    if (screen === 'welcome') navigate('/');
  };

  return <Signup navigateTo={navigateTo} onSignup={handleSignup} />;
}

export default SignupPage;
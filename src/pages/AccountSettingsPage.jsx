import { useEffect, useState } from 'react';
import AccountSettings from '../components/AccountSettings';
import { useNavigate } from 'react-router-dom';


function AccountSettingsPage() {
  const navigate = useNavigate();
  const navigateTo = (screen) => {
    if (screen === 'welcome') navigate('/');
  };

  const [userData, setUserData] = useState({
    fullName: 'Marry Doe',
    email: 'Marry@Gmail.Com',
  });

  useEffect(() => {
    // Try to load user data from localStorage
    const storedData = localStorage.getItem('userData');
    if (storedData) {
      setUserData(JSON.parse(storedData));
    }
  }, []);

  return <AccountSettings userData={userData} />;
}

export default AccountSettingsPage;
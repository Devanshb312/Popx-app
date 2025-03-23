import { useState } from 'react';

function Login({ navigateTo, onLogin }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(credentials);
  };

  return (
    <div className="p-6 h-screen">
      <h1 className="text-2xl font-bold mb-2">Signin to your PopX account</h1>
      <p className="text-gray-500 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-purple-600 text-sm mb-1">Email Address</label>
          <input 
            type="email" 
            name="email"
            value={credentials.email}
            onChange={handleChange}
            placeholder="Enter email address"
            className="w-full text-black border border-gray-300 rounded-md py-2 px-3"
            required
          />
        </div>
        
        <div className="mb-6">
          <label className="block text-purple-600 text-sm mb-1">Password</label>
          <input 
            type="password" 
            name="password"
            value={credentials.password}
            onChange={handleChange}
            placeholder="Enter password"
            className="w-full text-black border border-gray-300 rounded-md py-2 px-3"
            required
          />
        </div>
        
        <button 
          type="submit"
          className="w-full bg-gray-300 text-gray-400 py-2 rounded-md font-medium"
        >
          Login
        </button>
      </form>
      
      <button 
        onClick={() => navigateTo('welcome')}
        className="mt-4 text-sm text-gray-300"
      >
        Back to welcome
      </button>
    </div>
  );
}

export default Login;
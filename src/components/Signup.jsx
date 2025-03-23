import { useState } from 'react';

function Signup({ navigateTo, onSignup }) {
  const [formData, setFormData] = useState({
    fullName: 'Marry Doe',
    phoneNumber: 'Marry Doe', // This matches your mockup, but should be a phone number
    email: 'Marry Doe',
    password: 'Marry Doe',
    companyName: 'Marry Doe',
    isAgency: true
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRadioChange = (e) => {
    setFormData(prev => ({
      ...prev,
      isAgency: e.target.value === 'yes'
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignup(formData);
  };

  return (
    <div className="p-6 h-screen overflow-y-auto">
      <h1 className="text-2xl font-bold mb-6">Create your PopX account</h1>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-purple-600 text-sm mb-1">Full Name*</label>
          <input 
            type="text" 
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full border text-black border-gray-300 rounded-md py-2 px-3"
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-purple-600 text-sm mb-1">Phone number*</label>
          <input 
            type="tel" 
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full border text-black border-gray-300 rounded-md py-2 px-3"
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-purple-600 text-sm mb-1">Email address*</label>
          <input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border text-black border-gray-300 rounded-md py-2 px-3"
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-purple-600 text-sm mb-1">Password*</label>
          <input 
            type="password" 
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border text-black border-gray-300 rounded-md py-2 px-3"
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-purple-600 text-sm mb-1">Company name</label>
          <input 
            type="text" 
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="w-full border text-black border-gray-300 rounded-md py-2 px-3"
          />
        </div>
        
        <div className="mb-6">
          <p className="block text-purple-600 text-sm mb-2">Are you an Agency?*</p>
          <div className="flex items-center">
            <label className="inline-flex items-center mr-4">
              <input 
                type="radio" 
                name="agency" 
                value="yes"
                checked={formData.isAgency}
                onChange={handleRadioChange}
                className="text-purple-600 h-5 w-5" 
              />
              <span className="ml-2">Yes</span>
            </label>
            <label className="inline-flex items-center">
              <input 
                type="radio" 
                name="agency" 
                value="no"
                checked={!formData.isAgency}
                onChange={handleRadioChange}
                className="text-purple-600 h-5 w-5" 
              />
              <span className="ml-2">No</span>
            </label>
          </div>
        </div>
        
        <button 
          type="submit"
          className="w-full bg-purple-600 text-white py-3 rounded-md font-medium"
        >
          Create Account
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

export default Signup;
function Welcome({ navigateTo }) {
    return (
      <div className="p-6 h-screen flex flex-col">
        <div className="flex-grow flex items-center justify-center flex-col">
          <p className="flex item-center text-4xl font-bold mb-7 text-black ml-5 ">Welcome to PopX</p>
          <p className="text-gray-500 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="mt-auto">
          <button 
            onClick={() => navigateTo('signup')}
            className="w-full bg-purple-600 text-white py-3 rounded-md mb-4 font-medium"
          >
            Create Account
          </button>
          <button 
            onClick={() => navigateTo('login')}
            className="w-full bg-primary-300 text-purple-500 py-3 rounded-md font-medium"
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    );
  }
  
  export default Welcome;
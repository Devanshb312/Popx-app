function AccountSettings({userData,navigateTo}) {
    return (
      <div className="h-screen">
        <div className="p-6">
          <h1 className="text-xl font-medium mb-4">Account Settings</h1>
          
          <div className="flex items-center">
            <div className="relative mr-4">
              <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmVtYWxlJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 bg-purple-600 text-white rounded-full p-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
              </div>
            </div>
            
            <div>
              <h2 className="font-medium">{userData.fullName}</h2>
              <p className="text-gray-600 text-sm">{userData.email}</p>
            </div>
          </div>
          
          <p className="text-gray-600 mt-4 text-sm">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
          </p>
        </div>
        
        <div className="border-t border-dashed border-gray-300"></div>
        <div className="h-15 flex justify-center align-middle"> // Add this to your account settings component/page
<div className="mb-6">
  <a href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
    </svg>
    Back to Home
  </a>
</div></div>
        <div className="border-t border-dashed border-gray-300"></div>
      </div>
    );
  }
  
  export default AccountSettings;
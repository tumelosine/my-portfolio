const Loader = () => {
    return (
      <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
        <div className="flex space-x-4">
          <div className="w-6 h-6 rounded-full bg-pink-400 animate-bounce"></div>
          <div 
            className="w-6 h-6 rounded-full bg-purple-500 animate-bounce" 
            style={{ animationDelay: '0.2s' }}
          ></div>
          <div 
            className="w-6 h-6 rounded-full bg-pink-600 animate-bounce" 
            style={{ animationDelay: '0.4s' }}
          ></div>
        </div>
      </div>
    );
  };
  
  export default Loader;
const Navbar = () => {
  return (
    <nav className="bg-slate-500 flex justify-between items-center px-4 py-2">
      <div className="flex items-center gap-3">
        <h3 className="text-white font-bold text-lg">My App</h3>
        <img
          className="w-16 h-16 rounded-full"
          src="https://images.openai.com/static-rsc-4/unxoYLHVezT-df2rXQMuDLtim6FF-dy6HlPNKN7aiIoL8R4hKmPWamHT_XQHDi-8gdnNzfxvswk-Db7cQgq3TXtjADA-sS4upcIWPiqo0TBxRAjRdPVWIMpyN_Rh35pizHt78BpHot6FSh3-gRcpy-1PtzK8J44fNHqv9qH_3O_ZV6z4uSQzCvlsqtux0IbG?purpose=fullsize"
          alt=""
        />
      </div>
      <ul className="flex  gap-6 text-white">
        <li className="cursor-pointer hover:text-gray-200">Home</li>
        <li className="cursor-pointer hover:text-gray-200">About</li>
        <li className="cursor-pointer hover:text-gray-200">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;

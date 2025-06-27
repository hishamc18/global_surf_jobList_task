import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, User } from "lucide-react";
import { logout } from "@/features/auth/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="w-full bg-white border-b border-gray-500 px-6 py-4 flex justify-between items-center shadow-sm">
      {/* Logo */}
      <div className="text-xl font-bold text-black tracking-tight">JobSeek</div>

      {/* Profile Dropdown */}
      <div className="relative">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-lg text-sm transition"
        >
          <User size={18} className="text-gray-700" />
          <span className="text-gray-800 font-medium">{user?.name || "User"}</span>
        </button>

        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow z-50">
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50"
            >
              <LogOut size={16} />
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

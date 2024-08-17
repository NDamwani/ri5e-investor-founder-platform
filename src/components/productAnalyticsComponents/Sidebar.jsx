import React from 'react';
import { FaHome, FaTasks, FaUserFriends, FaCog, FaPlusCircle, FaInfoCircle, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="bg-gray-900 text-white w-64 h-screen flex flex-col justify-between p-4">
      {/* Top Section */}
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <FaHome className="text-xl" />
          <span>Home</span>
        </div>
        <div className="flex items-center justify-between space-x-3">
          <div className="flex items-center space-x-3">
            <FaTasks className="text-xl" />
            <span>Projects</span>
          </div>
          <FaPlusCircle className="text-sm" />
        </div>
        <div className="flex items-center justify-between space-x-3">
          <div className="flex items-center space-x-3">
            <FaTasks className="text-xl" />
            <span>Tasks</span>
          </div>
          <FaPlusCircle className="text-sm" />
        </div>
        <div className="flex items-center space-x-3">
          <FaUserFriends className="text-xl" />
          <span>Team</span>
        </div>
        <div className="flex items-center space-x-3">
          <FaCog className="text-xl" />
          <span>Settings</span>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <FaInfoCircle className="text-xl" />
          <span>Help & information</span>
        </div>
        <div className="flex items-center space-x-3">
          <FaSignOutAlt className="text-xl" />
          <span>Log out</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

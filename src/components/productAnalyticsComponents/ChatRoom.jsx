import React from 'react';
import { FaPhoneAlt, FaVideo, FaEllipsisH, FaPaperclip, FaRegSmile } from 'react-icons/fa';

const ChatRoom = () => {
  return (
    <div className="w-80 bg-gray-900 text-white rounded-lg p-6 space-y-4">
      {/* User Info */}
      <div className="bg-gray-800 p-4 rounded-lg text-center">
        <img src="https://via.placeholder.com/150" alt="User" className="w-16 h-16 rounded-full mx-auto mb-4" />
        <h2 className="text-xl font-semibold">Megan Norton</h2>
        <p className="text-gray-400">@megnorton</p>
        <div className="flex justify-center space-x-4 mt-4">
          <FaPhoneAlt className="text-xl text-white p-2 rounded-full bg-gray-700" />
          <FaVideo className="text-xl text-white p-2 rounded-full bg-gray-700" />
          <FaEllipsisH className="text-xl text-white p-2 rounded-full bg-gray-700" />
        </div>
      </div>

      {/* Activity Section */}
      <div>
        <h3 className="text-lg font-bold text-gray-400 mb-2">Activity</h3>
        <div className="space-y-4">
          <div className="flex items-start space-x-4">
            <img src="https://via.placeholder.com/40" alt="Floyd Miles" className="w-10 h-10 rounded-full" />
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <h4 className="font-semibold">Floyd Miles</h4>
                <span className="text-gray-500 text-sm">10:15 AM</span>
              </div>
              <p className="text-gray-400">
                Commented on <span className="text-blue-400">Stark Project</span>
              </p>
              <p className="bg-gray-800 p-3 rounded-lg mt-2">
                Hi! Next week we’ll start a new project. I’ll tell you all the details later
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <img src="https://via.placeholder.com/40" alt="Guy Hawkins" className="w-10 h-10 rounded-full" />
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <h4 className="font-semibold">Guy Hawkins</h4>
                <span className="text-gray-500 text-sm">10:15 AM</span>
              </div>
              <p className="text-gray-400">
                Added a file to <span className="text-blue-400">7Heros Project</span>
              </p>
              <div className="bg-gray-800 p-3 rounded-lg mt-2 flex items-center justify-between">
                <span>Homepage.fig</span>
                <span className="text-gray-400 text-sm">13.4 Mb</span>
              </div>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <img src="https://via.placeholder.com/40" alt="Kristin Watson" className="w-10 h-10 rounded-full" />
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <h4 className="font-semibold">Kristin Watson</h4>
                <span className="text-gray-500 text-sm">10:15 AM</span>
              </div>
              <p className="text-gray-400">
                Commented on <span className="text-blue-400">7Heros Project</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Message Input */}
      <div className="flex items-center space-x-4 bg-gray-800 p-4 rounded-lg">
        <FaPaperclip className="text-gray-400" />
        <input
          type="text"
          placeholder="Write a message"
          className="flex-1 bg-gray-800 text-white border-none outline-none"
        />
        <FaRegSmile className="text-gray-400" />
      </div>
    </div>
  );
};

export default ChatRoom;

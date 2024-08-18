import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { FaThumbsUp, FaClock, FaCheckCircle, FaCalendarAlt, FaEllipsisH, FaRegClock, FaMoneyBill } from 'react-icons/fa';
import { PopupButton } from "react-calendly"; // Import the PopupButton
import useAxiosPrivate from '../../hooks/useAxiosPrivate'; // Assuming you have this hook
import { constants } from '../../utility/constants';

const data = [
  { date: '01', thisMonth: 6, lastMonth: 7 },
  { date: '02', thisMonth: 7, lastMonth: 5 },
  { date: '03', thisMonth: 8, lastMonth: 6 },
  { date: '04', thisMonth: 4, lastMonth: 4 },
  { date: '05', thisMonth: 7, lastMonth: 8 },
  { date: '06', thisMonth: 5, lastMonth: 6 },
  { date: '07', thisMonth: 8, lastMonth: 7 },
];

const tasks = [
    {
      iconColor: 'bg-purple-600',
      icon: <FaRegClock className="text-white" />,
      taskName: 'Product Review for UI8 Market',
      statusColor: 'text-orange-500',
      status: 'In progress',
      time: '4h',
    },
    {
      iconColor: 'bg-yellow-500',
      icon: <FaRegClock className="text-white" />,
      taskName: 'UX Research for Product',
      statusColor: 'text-blue-500',
      status: 'On hold',
      time: '8h',
    },
    {
      iconColor: 'bg-blue-500',
      icon: <FaRegClock className="text-white" />,
      taskName: 'App design and development',
      statusColor: 'text-green-500',
      status: 'Done',
      time: '32h',
    },
  ];

const MainComponent = ({ userId }) => {
  const axiosPrivate = useAxiosPrivate();
  const [userName, setUserName] = useState(''); // State to store user name

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axiosGet(
          constants.GETPRODUCTPROFILE + prductOwnerId,
        );
        console.log(response);
        if (response) {
          const date = new Date(response.product?.dateOfOperations);
          const formattedDate = date.toISOString().split("T")[0];
          setProductOwnerData({
            ...response.product,
            dateOfOperations: formattedDate,
          });
        }
      } catch (e) {
        console.log(e);
      }
    };
    fetchProfileData();
  }, []);

  const CALENDLY_URL = "https://calendly.com/parth-rathod12/product-owner-meet";

  return (
    <div className="p-8 bg-black text-white ">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Hello, {userName}</h1>
          <p className="text-gray-400">Track team progress here. You almost reach a goal!</p>
        </div>
        <div className="flex items-center space-x-4">
          <span>16 May, 2023</span>
          <PopupButton
            url={CALENDLY_URL}
            rootElement={document.getElementById("root")}
            text={<FaCalendarAlt className="text-xl text-gray-400 cursor-pointer" />}
          />
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        <div className="bg-gray-800 p-4 rounded-lg flex items-center">
          <FaThumbsUp className="text-3xl text-green-500" />
          <div className="ml-4">
            <h2 className="text-2xl font-bold">18</h2>
            <p className="text-gray-400">Finished</p>
            <p className="text-green-500">+8 tasks</p>
          </div>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg flex items-center">
          <FaClock className="text-3xl text-red-500" />
          <div className="ml-4">
            <h2 className="text-2xl font-bold">31h</h2>
            <p className="text-gray-400">Tracked</p>
            <p className="text-red-500">-6 hours</p>
          </div>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg flex items-center">
          <FaMoneyBill className="text-3xl text-white" />
          <div className="ml-4">
            <h2 className="text-2xl font-bold">$10 M</h2>
            <p className="text-gray-400">Net Worth</p>
            <p className="text-green-500">+2000%</p>
          </div>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg flex items-center">
          <FaCheckCircle className="text-3xl text-white" />
          <div className="ml-4">
            <h2 className="text-2xl font-bold">$1.5 M</h2>
            <p className="text-gray-400">Total Amount Raised</p>
            <p className="text-green-500">+2000%</p>
          </div>
        </div>
      </div>

      {/* Performance Chart */}
      <div className="bg-gray-800 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-bold mb-4">Performance</h2>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
            <XAxis dataKey="date" stroke="#8884d8" />
            <YAxis stroke="#8884d8" />
            <Tooltip contentStyle={{ backgroundColor: '#333', borderColor: '#8884d8' }} />
            <Line type="monotone" dataKey="thisMonth" stroke="#8884d8" strokeWidth={2} />
            <Line type="monotone" dataKey="lastMonth" stroke="#f5a623" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Current Tasks */}
      <div className="bg-gray-800 p-4 rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Current Tasks</h2>
          <p className="text-gray-400">Done 30%</p>
          <button className="bg-gray-700 text-white px-4 py-2 rounded-lg">Week</button>
        </div>
        <div className="space-y-6">
          {tasks.map((task, index) => (
            <div key={index} className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${task.iconColor}`}>
                  {task.icon}
                </div>
                <span>{task.taskName}</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className={task.statusColor}>{task.status}</span>
                <div className="flex items-center space-x-1">
                  <FaRegClock className="text-gray-400" />
                  <span className="text-gray-400">{task.time}</span>
                </div>
                <FaEllipsisH className="text-gray-400" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainComponent;

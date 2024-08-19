import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  FaThumbsUp,
  FaClock,
  FaCheckCircle,
  FaCalendarAlt,
  FaEllipsisH,
  FaRegClock,
  FaMoneyBill,
} from "react-icons/fa";
import { PopupButton } from "react-calendly";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { constants } from "../../utility/constants";

const data = [
  { date: "01", thisMonth: 6, lastMonth: 7 },
  { date: "02", thisMonth: 7, lastMonth: 5 },
  { date: "03", thisMonth: 8, lastMonth: 6 },
  { date: "04", thisMonth: 4, lastMonth: 4 },
  { date: "05", thisMonth: 7, lastMonth: 8 },
  { date: "06", thisMonth: 5, lastMonth: 6 },
  { date: "07", thisMonth: 8, lastMonth: 7 },
];

const goals = [
  {
    iconColor: "bg-purple-600",
    icon: <FaRegClock className="text-white" />,
    goalName: "Launch MVP",
    statusColor: "text-orange-500",
    status: "In progress",
    time: "4 weeks",
  },
  {
    iconColor: "bg-yellow-500",
    icon: <FaRegClock className="text-white" />,
    goalName: "Secure Seed Funding",
    statusColor: "text-blue-500",
    status: "On hold",
    time: "8 weeks",
  },
  {
    iconColor: "bg-blue-500",
    icon: <FaRegClock className="text-white" />,
    goalName: "Build User Community",
    statusColor: "text-green-500",
    status: "Done",
    time: "12 weeks",
  },
];

const MainComponent = ({ productId }) => {
  const { axiosGet } = useAxiosPrivate();
  const [userName, setUserName] = useState("");
  const [worth, setWorth] = useState("");
  const [revenue, setRevenue] = useState("");
  const [companyName, setCompanyName] = useState("");

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        if (productId) {
          const response = await axiosGet(
            constants.GETPRODUCTPROFILE + productId,
          );

          if (response) {
            const user = response.product;
            setUserName(user.fullName || "User");
            setWorth(user.networth || "NA");
            setRevenue(user.revenue || "NA");
            setCompanyName(user.companyName || "Company");
          } else {
            const token = localStorage.getItem("userToken");

            const decodedToken = jwtDecode(token);
            const userId = decodedToken.id;

            const response = await axiosGet(
              constants.GETPRODUCTPROFILE + userId,
            );
            if (response) {
              const user = response.product;
              setUserName(user.fullName || "User");
              setWorth(user.networth || "NA");
              setRevenue(user.revenue || "NA");
            }
          }
        }
      } catch (e) {
        console.log(e);
      }
    };

    fetchProfileData();
  }, []);

  const CALENDLY_URL = "https://calendly.com/parth-rathod12/product-owner-meet";

  return (
    <div className="bg-black p-8 text-white">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          {productId ? (
            <h1 className="text-3xl font-bold">{companyName}</h1>
          ) : (
            <h1 className="text-3xl font-bold">Hello, {userName}</h1>
          )}
          {/* <h1 className="text-3xl font-bold">Hello, {userName}</h1> */}
          <p className="text-gray-400">
            Track company progress here. You're close to achieving your goals!
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <span>16 May, 2023</span>
          <PopupButton
            url={CALENDLY_URL}
            rootElement={document.getElementById("root")}
            text={
              <FaCalendarAlt className="cursor-pointer text-xl text-gray-400" />
            }
          />
        </div>
      </div>

      {/* Statistics */}
      <div className="mb-8 grid grid-cols-4 gap-4">
        <div className="flex items-center rounded-lg bg-gray-800 p-4">
          <FaThumbsUp className="text-3xl text-green-500" />
          <div className="ml-4">
            <h2 className="text-2xl font-bold">18</h2>
            <p className="text-gray-400">Goals Completed</p>
            <p className="text-green-500">+3 goals this month</p>
          </div>
        </div>
        <div className="flex items-center rounded-lg bg-gray-800 p-4">
          <FaClock className="text-3xl text-red-500" />
          <div className="ml-4">
            <h2 className="text-2xl font-bold">31h</h2>
            <p className="text-gray-400">Work Hours Logged</p>
            <p className="text-red-500">-6 hours last week</p>
          </div>
        </div>
        <div className="flex items-center rounded-lg bg-gray-800 p-4">
          <FaMoneyBill className="text-3xl text-white" />
          <div className="ml-4">
            <h2 className="text-2xl font-bold">${worth}</h2>
            <p className="text-gray-400">Company Net Worth</p>
            <p className="text-green-500">+2000%</p>
          </div>
        </div>
        <div className="flex items-center rounded-lg bg-gray-800 p-4">
          <FaCheckCircle className="text-3xl text-white" />
          <div className="ml-4">
            <h2 className="text-2xl font-bold">${revenue}</h2>
            <p className="text-gray-400">Annual Revenue</p>
            <p className="text-green-500">+2000%</p>
          </div>
        </div>
      </div>

      {/* Performance Chart */}
      <div className="mb-8 rounded-lg bg-gray-800 p-6">
        <h2 className="mb-4 text-xl font-bold">Performance Overview</h2>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
            <XAxis dataKey="date" stroke="#8884d8" />
            <YAxis stroke="#8884d8" />
            <Tooltip
              contentStyle={{ backgroundColor: "#333", borderColor: "#8884d8" }}
            />
            <Line
              type="monotone"
              dataKey="thisMonth"
              stroke="#8884d8"
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="lastMonth"
              stroke="#f5a623"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Current Goals */}
      <div className="rounded-lg bg-gray-800 p-4">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-bold">Current Goals</h2>
          <p className="text-gray-400">30% Completed</p>
          <button className="rounded-lg bg-gray-700 px-4 py-2 text-white">
            Week
          </button>
        </div>
        <div className="space-y-6">
          {goals.map((goal, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full ${goal.iconColor}`}
                >
                  {goal.icon}
                </div>
                <span>{goal.goalName}</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className={goal.statusColor}>{goal.status}</span>
                <div className="flex items-center space-x-1">
                  <FaRegClock className="text-gray-400" />
                  <span className="text-gray-400">{goal.time}</span>
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

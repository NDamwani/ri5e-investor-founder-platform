// import React from 'react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
// import Timeline from './Timeline';

// const data = [
//   { name: '01.01', value: 200 },
//   { name: '01.02', value: 300 },
//   { name: '01.03', value: 400 },
//   { name: '01.04', value: 250 },
//   { name: '01.05', value: 350 },
//   { name: '01.06', value: 300 },
//   { name: '01.07', value: 400 },
// ];

// const MainContent = () => {
//   return (
//     <div className="p-6 bg-black text-white flex-1">
//         <div className="p-6 bg-black text-white flex-1">
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
//         {/* Line Chart */}
//         <div className="col-span-2 bg-gray-900 p-4 rounded-lg shadow-md">
//           <ResponsiveContainer width="100%" height={300}>
//             <LineChart data={data}>
//               <CartesianGrid strokeDasharray="3 3" stroke="#444" />
//               <XAxis dataKey="name" stroke="#8884d8" />
//               <YAxis stroke="#8884d8" />
//               <Tooltip />
//               <Line type="monotone" dataKey="value" stroke="#4C6EF5" strokeWidth={2} />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>

//         {/* Total Visitors Card */}
//         <div className="bg-gray-900 p-4 rounded-lg shadow-md">
//           <div className="bg-blue-600 text-white p-4 rounded-md mb-4">
//             <h2 className="text-xl font-semibold">Total Visitors</h2>
//             <p className="text-4xl mt-2">124</p>
//             </div>
//           <Timeline /> {/* Insert the Timeline component here */}
//         </div>
//       </div>
//     </div>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
//         {/* Visitors by Browser */}
//         <div className="bg-gray-800 p-4 rounded">
//           <h2 className="text-xl font-semibold">Visitors by Browser</h2>
//           <ul className="mt-4 space-y-2">
//             <li className="flex justify-between items-center">
//               <span>Google Chrome</span>
//               <span>1,224</span>
//             </li>
//             <li className="flex justify-between items-center">
//               <span>Safari</span>
//               <span>124</span>
//             </li>
//           </ul>
//         </div>

//         {/* Visitors by Countries */}
//         <div className="bg-gray-800 p-4 rounded">
//           <h2 className="text-xl font-semibold">Visitors by Countries</h2>
//           <ul className="mt-4 space-y-2">
//             <li className="flex justify-between items-center">
//               <span>USA</span>
//               <span>12,624</span>
//             </li>
//             <li className="flex justify-between items-center">
//               <span>UK</span>
//               <span>4,124</span>
//             </li>
//             <li className="flex justify-between items-center">
//               <span>Germany</span>
//               <span>2,124</span>
//             </li>
//             <li className="flex justify-between items-center">
//               <span>Belgium</span>
//               <span>1,124</span>
//             </li>
//             <li className="flex justify-between items-center">
//               <span>Sweden</span>
//               <span>524</span>
//             </li>
//           </ul>
//         </div>

//         {/* Visitors by Operating System */}
//         <div className="bg-gray-800 p-4 rounded">
//           <h2 className="text-xl font-semibold">Visitors by Operating System</h2>
//           <ul className="mt-4 space-y-2">
//             <li className="flex justify-between items-center">
//               <span>MacOS</span>
//               <span>124</span>
//             </li>
//             <li className="flex justify-between items-center">
//               <span>Microsoft</span>
//               <span>124</span>
//             </li>
//           </ul>
//         </div>

//         {/* Journeys */}
//         <div className="col-span-3 bg-gray-800 p-4 rounded">
//           <h2 className="text-xl font-semibold">Journeys</h2>
//           <ul className="mt-4 space-y-2">
//             <li className="flex justify-between items-center">
//               <span>Name_of_Journey</span>
//               <span>13</span>
//             </li>
//             <li className="flex justify-between items-center">
//               <span>Name_of_Journey</span>
//               <span>5</span>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MainContent;

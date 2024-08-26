import React from "react";
import Header from "./Header";
import MainComponent from "./MainComponent";
import TaskScheduler from "./TaskScheduler"; // Import TaskSchedulerimport TaskScheduler from "./TaskScheduler";
import { useLocation } from "react-router-dom";


function ProductPage() {
  const state = useLocation();

  let productId = state.state?.id;
  // console.log("productId", productId);
  return (
    <div className="mb-10">
      <div className="flex bg-gray-900">
        {/* <Sidebar /> */}
        <div className="flex-1 flex">
          <div className="flex-1 flex flex-col ">
            {/* <Header /> */}
            <MainComponent />
          </div>
          <TaskScheduler/>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;

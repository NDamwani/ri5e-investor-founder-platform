import React from "react";
import MainComponent from "./MainComponent";
import TaskScheduler from "./TaskScheduler";

function ProductPage() {
  return (
    <div className="flex-1">
      <div className="flex">
        {/* <Sidebar /> */}
        <div className="mx-auto flex flex-1">
          <div className="flex flex-1 flex-col">
            {/* <Header /> */}
            <MainComponent />
          </div>
          <TaskScheduler />
        </div>
      </div>
    </div>
  );
}

export default ProductPage;

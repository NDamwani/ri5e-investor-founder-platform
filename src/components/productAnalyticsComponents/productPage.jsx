import React from "react";
import MainComponent from "./MainComponent";
import TaskScheduler from "./TaskScheduler";
import { useLocation } from "react-router-dom";

function ProductPage() {
  const state = useLocation();

  let productId = state.state?.id;
  // console.log("productId", productId);
  return (
    <div className="flex-1">
      <div className="flex">
        {/* <Sidebar /> */}
        <div className="mx-auto flex flex-1">
          <div className="flex flex-1 flex-col">
            {/* <Header /> */}
            <MainComponent productId={productId} />
          </div>
          {!productId && <TaskScheduler />}
          {/* <TaskScheduler /> */}
        </div>
      </div>
    </div>
  );
}

export default ProductPage;

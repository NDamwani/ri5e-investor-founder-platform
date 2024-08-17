import Header from "./Header";
import ChatRoom from "./ChatRoom";
import MainComponent from "./MainComponent";


function ProductPage() {
  return (
    <div className="mb-10">
      <div className="flex h-screen bg-gray-900">
        {/* <Sidebar /> */}
        <div className="flex-1 flex">
          <div className="flex-1 flex flex-col ">
            <Header />
            <MainComponent />
          </div>
          <ChatRoom />
        </div>
      </div>
    </div>
  );
}




export default ProductPage;

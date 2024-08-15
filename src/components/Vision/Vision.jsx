import Icosahedral from "./Icosahedral";

const Vision = () => {
  return (
    <section
      id="vision"
      className="bg-black text-white h-screen flex items-center justify-between px-10 text-center"
    >
      <div className="w-1/2 max-sm:hidden">
        <Icosahedral />
      </div>
      <div className="max-w-lg">
        <h2 className="text-sm uppercase mb-2">[Our Vision]</h2>
        <h1 className="text-5xl font-bold mb-4">
          Ri5E is transforming industries and pioneering new ones
        </h1>
        <p className="text-lg mb-8">
          Design. Engineering. Marketing. Investment. Education.
        </p>
        <button className="bg-transparent border border-white text-white font-semibold py-2 px-6 rounded transition hover:bg-gray-300 hover:text-black">
          VIEW PORTFOLIO
        </button>
      </div>
    </section>
  );
};

export default Vision;

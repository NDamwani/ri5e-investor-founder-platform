import PrimaryButton from "../common/PrimaryButton";
import ThreeDModel from "./ThreeDModel";

const Hero = () => {
  const primaryButtonClass = `bg-white text-black font-semibold py-2 px-6 rounded transition hover:bg-gray-300`;
  return (
    <section className="bg-black text-white h-screen flex items-center justify-between px-10 text-center">
      <div className="max-w-lg mx-auto">
        <h1 className="p-4 sm:px-8 lg:px-20 text-6xl font-bold mb-4">
          Ri5E Above Achieve Beyond
        </h1>
        <p className="text-2xl md:text-4xl mb-8 ">
          Empowering Early-Stage Success Through Innovation
        </p>
        <PrimaryButton name="Learn More" className={primaryButtonClass} />
      </div>
      <div className="w-1/2 flex justify-center items-center max-sm:hidden">
        <ThreeDModel />
      </div>
    </section>
  );
};

export default Hero;

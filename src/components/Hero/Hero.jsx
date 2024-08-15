import React from 'react';
import ThreeDModel from './ThreeDModel';

const Hero = () => {
  return (
    <section className="bg-black text-white h-screen flex items-center justify-between px-10">
      <div className="max-w-lg">
        <h1 className="text-6xl font-bold mb-4">Ri5E Above Achieve Beyond</h1>
        <p className="text-2xl mb-8">Empowering Early-Stage Success Through Innovation</p>
        <button className="bg-white text-black font-semibold py-2 px-6 rounded transition hover:bg-gray-300">
          Learn More
        </button>
      </div>
      <div className="w-1/2 flex justify-center items-center">
        <ThreeDModel />
      </div>
    </section>
  );
};

export default Hero;

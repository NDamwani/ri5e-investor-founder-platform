import React from 'react';

const services = [
  { title: 'Design', description: 'Aesthetics with purpose' },
  { title: 'Engineering', description: 'Uncompromising quality' },
  { title: 'Marketing', description: 'Amplifying brand reach' },
  { title: 'Investment', description: 'More than just capital' },
  { title: 'Education', description: 'Equipping for growth' },
  { title:  'Mentorship', description:'To '}
];

const Services = () => {
  return (
    <section className="bg-black text-white py-20 px-10 flex flex-col items-center text-center">
      <div className="mb-12 max-w-lg">
        <h2 className="text-3xl font-bold mb-4">Our Core Expertise</h2>
        <p className="text-lg">
          We specialize in providing top-tier services that drive innovation, quality, and growth across every aspect of your business.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 justify-center">
        {services.map((service, index) => (
          <div key={index} className="bg-[#1a1a1a] p-8 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-4">{service.title}</h3>
            <p className="text-sm text-gray-400">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;

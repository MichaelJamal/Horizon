import React from 'react';

const IntermodalServices = () => {
  return (
    <div className="bg-gradient-to-b pt-64  py-12 px-12">
      <div className="mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-36">
          <h2 className="section-subtitle font-extrabold sm:text-4xl">Inland/Intermodal Services</h2>
          <p className="mt-4 section-text text-black">As a global logistics provider, Horizon Express offers reliable and eco-friendly end-to-end intermodal services to transport your cargo efficiently. Our innovative solutions combine various transport options including road, rail, barge, and feeder routes worldwide, providing more than what you expect.</p>
        </div>
        <div className="flex justify-center mt-8 mb-36">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {/* Service Card 1 - Reliable */}
            <div className="bg-white overflow-hidden shadow-lg rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-5xl font-semibold text-gray-800 mb-12">Reliable</h3>
                <p className="mt-2 section-text text-gray-600">With a global network connecting ocean and inland routes, Horizon Express ensures reliable and on-time delivery of your cargo.</p>
              </div>
            </div>
            {/* Service Card 2 - Tailor-made */}
            <div className="bg-white overflow-hidden shadow-lg rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-5xl font-semibold text-gray-800 mb-12">Tailor-made</h3>
                <p className="mt-2 section-text text-gray-600">We provide tailor-made intermodal solutions according to your specific needs, ensuring a personalized experience for every customer.</p>
              </div>
            </div>
            {/* Service Card 3 - Eco-friendly */}
            <div className="bg-white overflow-hidden shadow-lg rounded-lg">
              <div className="px-6 py-5 sm:p-6">
                <h3 className="text-5xl font-semibold text-gray-800 mb-12">Eco-friendly</h3>
                <p className="mt-2 section-text text-gray-600">Horizon Express prioritizes eco-friendly transport options, contributing to a sustainable supply chain and environment.</p>
              </div>
            </div>
            {/* Service Card 4 - Competitive */}
            <div className="bg-white overflow-hidden shadow-lg rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-5xl font-semibold text-gray-800 mb-12">Competitive</h3>
                <p className="mt-2 section-text text-gray-600">Our intermodal services offer competitive pricing without compromising on quality, delivering value to our customers.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-8 mb-36">
          <p className="section-subtitle text-black">Why choose Horizon Express?</p>
          <p className="mt-2 section-text text-black">With our expertise in designing the best route and the high-quality service provided by our carefully selected partners, shipping with Horizon Express is safe, efficient, and enjoyable.</p>
          <p className="mt-2 section-text text-black">Experience the difference with Horizon Express - Your trusted logistics partner.</p>
        </div>
      </div>
    </div>
  );
};

export default IntermodalServices;

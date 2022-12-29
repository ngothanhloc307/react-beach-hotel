import React from "react";

const Plan = () => {
  return (
    <div className="max-w-[1400px] m-auto px-4 py-16 grid lg:grid-cols-2 gap-4">
      <div className="grid grid-cols-2 grid-rows-6 h-[80vh]">
        {/* Left Side */}
        <img
          className="object-cover w-full h-full p-2 row-span-3"
          src="https://images.pexels.com/photos/1998439/pexels-photo-1998439.jpeg"
          alt="/"
        />
        <img
          className="object-cover w-full h-full p-2 row-span-2"
          src="https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg"
          alt="/"
        />
        <img
          className="object-cover w-full h-full p-2 row-span-2"
          src="https://images.pexels.com/photos/127673/pexels-photo-127673.jpeg"
          alt="/"
        />
        <img
          className="object-cover w-full h-full p-2 row-span-3"
          src="https://images.pexels.com/photos/1449767/pexels-photo-1449767.jpeg"
          alt="/"
        />
        <img
          className="object-cover w-full h-full p-2 row-span-2"
          src="https://images.pexels.com/photos/279574/pexels-photo-279574.jpeg"
          alt="/"
        />
      </div>
      {/* Right Side */}
      <div className="flex flex-col h-full justify-center">
        <h3 className="text-5xl md:text-6xl font-bold">Plane Your Next Trip</h3>
        <p className="text-2xl py-6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae,
          optio.
        </p>
        <p className="pb-6">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          pariatur dicta architecto minima ullam, reiciendis reprehenderit odit
          vel totam saepe eum beatae perferendis obcaecati illum, vero facere
          similique eaque mollitia.
        </p>
        <div>
          <button className="border-black mr-4 hover:shadow-xl">
            Learn More
          </button>
          <button className="bg-black text-white border-black hover:shadow-xl">
            Book Your Trip
          </button>
        </div>
      </div>
    </div>
  );
};

export default Plan;

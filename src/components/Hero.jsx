import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-screen">
      <img
        className="top-0 left-0 h-screen w-full object-cover"
        src="https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg"
      />
      <div className="bg-black/30 absolute top-0 left-0 w-full h-screen"></div>
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white">
        <div className="md:left-[10%] max-w-[1100px] m-auto absolute p-4">
          <p>Al Inclusive</p>
          <h1 className="font-bold text-5xl md:text-7xl drop-shadow-2xl">
            Private Beaches & gateways
          </h1>
          <p className="max-w-[600px] drop-shadow-2xl py-2 text-xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi
            aliquid tenetur amet inventore sunt, ut magni, id suscipit incidunt
            velit odio eaque exercitationem quas ea.
          </p>
          <button className="bg-white text-black">Resever Now</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

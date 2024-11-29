import React from "react";

const FooterUpper = () => {
  return (
    <div className="w-full h-[40vh] mx-auto justify-center bg-gradient-to-tr from-green-500  to-blue-900 flex">
      <div className="flex lg:flex-row flex-col max-w-7xl lg:mx-auto mx-5  h-full justify-center lg:justify-between items-center gap-3  lg:w-full">
        <div className=" flex flex-col ">
          <h1 className="text-4xl text-white font-bold">
            Power Up & Cool Down
          </h1>
          <p className="text-xl text-white">
            Discover How to Bring the Most Efficient Cooling Technology to Your
            Data Center
          </p>
        </div>
        <div className="uppercase text-xl flex justify-center">
          <button className="bg-blue-900 hover:bg-[#243865] text-white font-bold py-2 px-4 rounded">
            Request a Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default FooterUpper;
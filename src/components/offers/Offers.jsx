import React from "react";
import exclusive_image from "../../Assets/exclusive_image.png";

const Offers = () => {
  return (
    <div className="offers">
      <div className="flex-1 flex flex-col justify-center md:w-full md:justify-start">
        <h1 className="text-[#171717] text-2xl md:text-7xl font-semibold">Exclusive</h1>
        <h1 className="text-[#171717] text-xl  md:text-7xl font-semibold">Offer For You</h1>
        <p className="text-[#171717] md:text-[22px] text-[14px] font-semibold">ONLY ON BEST SELLERS PRODUCTS</p>
        <button className="md:w-[282px] w-[102px]  md:h-[70px] h-[35px] bg-[#921c1c] border-none text-white text-[22px] rounded-[35px] font-medium mt-[30px] cursor-pointer">Check Now</button>
      </div>
      <div className="flex-1 flex items-center justify-end pt-[50px] lg:w-full lg:pt-0 lg:justify-end">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  );
};

export default Offers;

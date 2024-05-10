import React from "react";

const NewsLetter = () => {
  return (
    <div className="offers justify-center items-center flex-col md:gap-[30px]">
      <h1 className="text-[#454545] mt-2 md:text-[55px]  font-semibold">
        Get Exclusive offers on Your Email
      </h1>
      <p className="text-[#454545] text-[10px] md:text-[20px] ">
        {" "}
        Subscribe to our newletter and stay updated
      </p>
      <div className=" flex items-center flex-wrap md:flex-nowrap justify-center md:justify-between bg-white w-[276px] h-[25px] md:w-[730px] md:h-[70px] rounded-[80px] border border-[#e3e3e3e] gap-6 md:gap-0 mt-4 md:mt-0">
        <input
          type="email"
          placeholder="Your Email id"
          className="w-[368px] md:w-[500px] ml-5 md:ml-[30px] border-none outline-none text-[#616161] text-[10px] md:text-[16px]"
        />
        <button
          className="w-[120px] h-[30px] md:w-[210px] md:h-[70px] rounded-[80px] bg-black text-white text-[16px]
            cursor-pointer"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;

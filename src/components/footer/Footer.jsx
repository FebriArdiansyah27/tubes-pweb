import React from "react";
import footer_logo from "../../Assets/logo_big.png";
import instgram_icon from "../../Assets/instagram_icon.png";
import pintester_icon from "../../Assets/pintester_icon.png";
import whatsapp_icon from "../../Assets/whatsapp_icon.png";
const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-6 md:gap-[50px]">
      <div className="flex items-center gap-[30px]">
        <img src={footer_logo} alt="" className="w-[50px] md:w-full" />
        <p className="text-[#383838] text-[26px] md:text-[46px] font-bold">SHOPPER</p>
      </div>
      <ul className="flex flex-wrap gap-5 justify-center items-center  md:gap-[50px] text-[20px] text-[#252525]">
        <li className="cursor-pointer">Company</li>
        <li className="cursor-pointer">Products</li>
        <li className="cursor-pointer">Offices</li>
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Contact</li>
      </ul>
      <div className="flex gap-[20px] items-center justify-center">
        <div className="p-[10px] pb-[6px] bg-[#fbfbfb] border border-[#ebebeb]">
          <img src={instgram_icon} alt="" />
        </div>
        <div>
          <img src={pintester_icon} alt="" />
        </div>
        <div>
          <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className="flex flex-col items-center gap-[30px] w-full mb-[30px] text-[#1a1a1a] text-[10px] md:text-[20px]">
        <hr className="w-[80%] border-none rounded-[10px] h-[3px] bg-[#c7c7c7]" />
        <p>Copyright @ 2024 - All Right Reserved </p>
      </div>
    </div>
  );
};

export default Footer;

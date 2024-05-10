import React from "react";
import arrow_icon from "../../Assets/breadcrum_arrow.png";

const BreadCrum = (props) => {
  const { product } = props;
  // console.log(product);
  return (
    <div className="flex items-center gap-2 text-[#5e5e5e] text-[8px] md:text-[16px] font-semibold my-5 mx-5 md:my-[60px] md:mx-[170px] capitalize cursor-pointer ">
      HOME
      <img src={arrow_icon} alt=""  /> SHOP <img src={arrow_icon} alt="" />
      {product.category} <img src={arrow_icon} alt="" /> {product.name}
    </div>
  );
};

export default BreadCrum;

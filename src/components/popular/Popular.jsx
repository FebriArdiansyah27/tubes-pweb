import React from "react";
import data_product from "../../Assets/data";
import Items from "../item/Items";

const Popular = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-[10px] h-[90%] md:mb-20">
        <h1 className="text-[#171717] md:text-[50px] text-[26px] font-semibold">POPULAR NOW</h1>
        <hr className="popular_hr" />
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:gap-8 justify-items-center">
          {data_product.map((item, i) => {
            return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Popular;

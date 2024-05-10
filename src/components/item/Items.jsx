import React from "react";
import { Link } from "react-router-dom";
const Items = (props) => {
  return (
    <div className="w-[260px] h-[360px] border border-gray-300 rounded-md">
      <Link to={`/product/${props.id}`}>
        {" "}
        <div className="overflow-hidden w-full h-[240px]">
          <img onClick={window.scrollTo(0, 0)} className="item" src={props.image} alt="" />
        </div>
      </Link>

      <p className="mb-2 mx-2 ">{props.name}</p>
      <div className="flex gap-5 mx-2">
        <div className="text-[#374151] text-lg font-semibold">${props.new_price}</div>
        <div className="text-[#8c8c8c] text-lg font-medium line-through">${props.old_price}</div>
      </div>
    </div>
  );
};

export default Items;

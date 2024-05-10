import React from "react";
import new_collection from "../../Assets/new_collections";
import Items from "../item/Items";

const NewCollections = () => {
  return (
    <div className="flex flex-col items-center gap-[10px] h-[90%] md:mb-[100px]">
      <h1 className="text-[#171717] text-[26px] md:text-[50px] font-semibold">NEW COLLECTIONS</h1>
      <hr className="popular_hr" />
      <div className="grid mt-[50px] md:gap-[30px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {new_collection.map((item, i) => (
          <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        ))}
      </div>
    </div>
  );
};

export default NewCollections;

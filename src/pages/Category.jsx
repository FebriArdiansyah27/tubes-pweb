import React, { useState } from "react";
import dropdown_icon from "../Assets/dropdown_icon.png";
import { Items } from "../components";
import all_product from "../Assets/all_product";

const Category = (props) => {
  const [sortPrice, setSortPrice] = useState([]);
  const [arrowDown, setArrowDown] = useState(false);
  const [activeCategory, setActiveCategory] = useState(props.items);

  const handleSortHigh = () => {
    const sortedProducts = all_product
      .filter((item) => item.category === activeCategory)
      .slice()
      .sort((a, b) => b.new_price - a.new_price);
    setSortPrice(sortedProducts);
  };

  const handleSortLow = () => {
    const sortedProducts = all_product
      .filter((item) => item.category === activeCategory)
      .slice()
      .sort((a, b) => a.new_price - b.new_price);
    setSortPrice(sortedProducts);
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setSortPrice([]);
  };

  return (
    <div className="pb-16">
      <img className="block my-[30px] mx-auto w-[85%]" src={props.banner} alt="Banner image" />
      <div className="flex md:my-0 md:mx-[124px] justify-between items-center ">
        <div className="flex flex-col items-center justify-center relative">
          <div className="flex items-center gap-2 p-1" onClick={() => setArrowDown(!arrowDown)}>
            <span className="text-[14px] md:text-lg font-semibold text-gray-500">SORT BY</span>{" "}
            <span className="flex items-center gap-2 text-[10px] md:text-base text-gray-400">
              popular <img src={dropdown_icon} className="text-gray-300" alt="" />
            </span>{" "}
          </div>
          {arrowDown && (
            <div className="absolute top-[36px] z-40">
              <ul className="rounded-md px-2 w-36 py-2 text-[14px] bg-gray-300">
                <li onClick={handleSortHigh} className="cursor-pointer">
                  Price : High to Low
                </li>
                <li onClick={handleSortLow} className="mt-2 cursor-pointer">
                  Price : Low to High
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="my-[40px] mx-[124px] gap-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:gap-5 justify-items-center">
        {sortPrice.length > 0
          ? sortPrice.map((item, i) => <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />)
          : all_product.map((item, i) => (props.items === item.category ? <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} /> : null))}
      </div>
    </div>
  );
};

export default Category;

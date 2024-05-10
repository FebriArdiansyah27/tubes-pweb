import React, { useState } from "react";
import start_icon from "../../Assets/star_icon.png";
import start_dull_icon from "../../Assets/star_dull_icon.png";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/Slice";
import { addToWhislist } from "../../redux/WhislistSlice";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { addToSize } from "../../redux/Size";
import { toast } from "react-toastify";
const ProductDisplay = (props) => {
  const { product } = props;
  const [selectedSize, setSelectedSize] = useState("");
  const handleSizeClick = (size) => {
    dispatch(addToSize(size)); // Dispatch addToSize action with the selected size
    setSelectedSize(size);
  };
  const dispatch = useDispatch();
  let discount = Math.floor(((product.old_price - product.new_price) / product.old_price) * 100);
  const navigate = useNavigate();
  const details = JSON.parse(localStorage.getItem("userDetails"));
  const addTohandler = (product) => {
    if (details?.role) {
      if (selectedSize != "") {
        dispatch(addToCart({ product, selectedSize }));
      } else {
        // alert("selcted size")
        toast.dismiss();
        toast.warn("selcted size", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } else {
      navigate("/login");
    }
  };

  const addTowhsliLogin = (product) => {
    if (details?.role) {
      dispatch(addToWhislist(product));
    } else {
      navigate("/login");
    }
  };
  return (
    <div className="flex flex-wrap md:flex-nowrap my-0 md:mx-[170px] mx-5">
      <div className="flex gap-[17px]">
        <div className="flex flex-col gap-4">
          <img className="h-16 md:h-[163px]" src={product.image} alt="" />
          <img className="h-16 md:h-[163px]" src={product.image} alt="" />
          <img className="h-16 md:h-[163px]" src={product.image} alt="" />
          <img className="h-16 md:h-[163px]" src={product.image} alt="" />
        </div>
        <div className="w-[250px] h-[300px] md:w-[586px] md:h-[700px]">
          <img className="w-full h-full" src={product.image} alt="" />
        </div>
      </div>
      <div className="my-0 md:mx-[70px] flex flex-col">
        <h1 className="text-[#3d3d3d] md:text-[40px] text-[20px] font-bold ">{product.name}</h1>
        <div className="flex items-center mt-[13px] gap-[5px] text-[#1c1c1c] text-base">
          <img src={start_icon} alt="" />
          <img src={start_icon} alt="" />
          <img src={start_icon} alt="" />
          <img src={start_icon} alt="" />
          <img src={start_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="flex mt-4 mx-0 gap-4 text-2xl font-bold">
          <div className="text-[#818181] line-through">${product.old_price}</div>
          <div className="text-[#ff4141]">${product.new_price}</div>
          <div className="text-green-500">
            {discount}% <span>OFF</span>
          </div>
        </div>
        <div className="text-lg text-gray-500 mb-4">
          <p>inclusive of all taxes</p>
        </div>
        <div className="text-[14px]">A light weight, Usually Knitted , Pullover Shirt Close-Fitting and with a rounde neckLine and short Sleeves , warn as an UnderShirt or Outer Garment.</div>
        <div>
          <h1 className="mt-[55px] text-[#656565] text-[20px] font-semibold ">Select Size</h1>
          <div className="flex my-[30px] mx-0 gap-[20px] flex-wrap md:flex-nowrap">
            <button
              onClick={(e) => handleSizeClick("S")}
              className={`py-1 px-2 md:py-[18px] md:px-[24px] bg-${selectedSize === "S" ? "red-400 text-white border-2 border-gray-600" : "gray-500"} border border-[#ebebeb] rounded-[3px] cursor-pointer`}
            >
              S
            </button>
            <button
              onClick={() => handleSizeClick("M")}
              className={`py-1 px-2 md:py-[18px] md:px-[24px] bg-${selectedSize === "M" ? "red-400 text-white border-2 border-gray-600" : "gray"} border border-[#ebebeb] rounded-[3px] cursor-pointer`}
            >
              M
            </button>
            <button
              onClick={() => handleSizeClick("L")}
              className={`py-1 px-2 md:py-[18px] md:px-[24px] bg-${selectedSize === "L" ? "red-400 text-white border-2 border-gray-600" : "gray"} border border-[#ebebeb] rounded-[3px] cursor-pointer`}
            >
              L
            </button>
            <button
              onClick={() => handleSizeClick("XL")}
              className={`py-1 px-2 md:py-[18px] md:px-[24px] bg-${selectedSize === "XL" ? "red-400 text-white border-2 border-gray-600" : "gray"} border border-[#ebebeb] rounded-[3px] cursor-pointer`}
            >
              XL
            </button>
            <button
              onClick={() => handleSizeClick("XXL")}
              className={`py-1 px-2 md:py-[18px] md:px-[24px] bg-${selectedSize === "XXL" ? "red-400 text-white border-2 border-gray-600" : "gray"} border border-[#ebebeb] rounded-[3px] cursor-pointer`}
            >
              XXL
            </button>
          </div>
        </div>
        <div className="flex flex-wrap md:flex-nowrap md:gap-6 items-center justify-center">
          <motion.button
            animate={{
              scale: 0.9,
            }}
            className="py-2 px-2 md:py-5 md:px-10 w-[150px] md:w-[200px] text-base text-white font-semibold bg-[#ff4141] mb-10 border-none outline-none"
            onClick={() => dispatch(addTohandler({ ...product, size: selectedSize }))}
          >
            ADD TO Cart
          </motion.button>
          <motion.button
            animate={{
              scale: 0.9,
            }}
            className="py-2 md:py-5 md:px-10 w-[100px] md:w-[200px] text-base text-white font-semibold bg-[#ff4141] mb-10 border-none outline-none"
            onClick={() => addTowhsliLogin(product)}
          >
            Whislist
          </motion.button>
        </div>
        <p className="mt-[10px] ">
          <span className="font-semibold">Category :</span>Women , T-shirt , Crop Top
        </p>
        <p className="mt-[10px]">
          <span className="font-semibold">Tags :</span>Moder , Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;

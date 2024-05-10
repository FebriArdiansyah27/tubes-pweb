import React, { useState } from "react";
import { auth, db } from "../firbase/Config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginSingup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSign = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      const userObj = {
        name: name,
        uid: user.user.uid,
        email: user.user.email,
        role: "user",
      };
      const userRefrence = collection(db, "userDetails");
      addDoc(userRefrence, userObj);
      localStorage.setItem("userDetails", JSON.stringify(userObj));
      toast.dismiss();
      toast.success("Account Created Succesfully", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setTimeout(() => {
        navigate("/login");
      }, 1200);
    } catch (error) {
      // const errorMessage = error.message;
      toast.dismiss();
      toast.error("Enter valid Email or Password", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <div className="w-full h-full pb-[100px] bg-[#fce3fe] pt-[100px]">
      <div className="md:w-[580px] h-[600px] bg-white m-auto py-[40px] px-[60px]">
        <h1 className="text-xl md:text-4xl font-semibold my-[20px]">Sign Up</h1>
        <div className="flex flex-col md:gap-[30px] gap-5 mt-[30px] relative">
          <input type="text" placeholder="First Name" onChange={(e) => setName(e.target.value)} className="h-[40px]  w-full pl-[20px] border border-[#c9c9c9] outline-none text-[#5c5c5c] text-[14px] md:text-lg rounded-md" />
          <input type="text" placeholder="Last Name" className="h-[40px] w-full pl-[20px] border border-[#c9c9c9] outline-none text-[#5c5c5c] text-[14px] md:text-lg  rounded-md" />
          <input
            type="email"
            name=""
            id="email"
            placeholder="Email Address"
            onChange={(e) => setEmail(e.target.value)}
            className="h-[40px] w-full pl-[20px] border border-[#c9c9c9] outline-none text-[#5c5c5c] text-[14px] md:text-lg  rounded-md"
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name=""
              id="pass"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className="h-[40px] w-full  pl-[20px] border border-[#c9c9c9] outline-none text-[#5c5c5c] text-[14px] md:text-lg  rounded-md"
            />
            <span className="absolute top-1 right-3 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEye className="text-3xl text-[#5c5c5c]" /> : <FaEyeSlash className="text-3xl text-[#5c5c5c]" />}
            </span>
          </div>
        </div>
        <motion.button whileTap={{ scale: "0.9" }} onClick={handleSign} className="md:w-[450px] md:h-[42px]  px-4 md:px-0 text-white bg-[#ff4141]  md:mt-[30px] border-none  text-base md:text-2xl font-medium   rounded-md cursor-pointer">
          Continue
        </motion.button>
        <p className="mt-[20px] text-[#5c5c5c] text-base md:text-lg font-medium">
          Already have an account ?{" "}
          <motion.span whileTap={{ scale: "0.9" }} className="text-[#ff4141] font-semibold">
            <Link to={"/login"}>Login Here</Link>
          </motion.span>{" "}
        </p>
        <div className="flex items-center mt-[25px] gap-[20px] text-[#5c5c5c] text-[10px] md:text-[16px] font-medium">
          <input type="checkbox" name="" id="" />
          <p>By continuing i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSingup;

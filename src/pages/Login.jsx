import React, { useState } from "react";
import { auth, db } from "../firbase/Config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSign = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      // const user = await createUserWithEmailAndPassword(auth, email, password);
      const userObj = {
        // name: name,
        uid: user.user.uid,
        email: user.user.email,
        role: "user",
      };
      const userRefrence = collection(db, "userDetails");
      addDoc(userRefrence, userObj);
      localStorage.setItem("userDetails", JSON.stringify(userObj));
      toast.dismiss();
      toast.success("Login successfully", {
        position: "top-center",
        autoClose: 800,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      // const errorCode = error.code;
      // const errorMessage = error.message;
      // console.log(errorMessage, errorCode);
      // alert("failed");
      toast.dismiss();
      toast.error("Enter Valid Email and Password", {
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
  };

  return (
    <div className="w-full h-full pb-[100px] bg-[#fce3fe] pt-[100px]">
      <div
        className="md:w-[580px] h-[400px]
      bg-white m-auto py-[40px] px-[60px]"
      >
        <h1 className=" text-xl md:text-4xl font-semibold my-[20px]">Login</h1>
        <div className="flex flex-col gap-[30px] mt-[30px]">
          <input type="email" name="" id="email" placeholder="Email Address" onChange={(e) => setEmail(e.target.value)} className="h-[40px] w-full pl-[20px] border border-[#c9c9c9] outline-none text-[#5c5c5c] text-lg rounded-md" />
          <input type="password" name="" id="pass" placeholder="Password" onChange={(e) => setPassword(e.target.value)} className="h-[40px] w-full pl-[20px] border border-[#c9c9c9] outline-none text-[#5c5c5c] text-lg rounded-md" />
        </div>
        <button onClick={handleSign} className="md:w-[450px] h-[42px] px-4 md:px-0 text-white bg-[#ff4141] mt-[30px] border-none text-2xl font-medium   rounded-md cursor-pointer">
          Contiune
        </button>
        <p className="mt-[20px] text-[#5c5c5c] text-[14px] md:text-lg font-medium">
          Create an Account ?{" "}
          <span className="text-[#ff4141] font-semibold">
            <Link to={"/signup"}>Sign Up</Link>
          </span>{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;

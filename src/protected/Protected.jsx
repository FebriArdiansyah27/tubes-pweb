import React from "react";
import { useNavigate } from "react-router-dom";

const Protected = ({ children }) => {
  const navigate = useNavigate();
  const details = JSON.parse(localStorage.getItem("userDetails"));
  // console.log(details);
  if (details?.role === "user") {
    return children;
  } else {
    navigate("/login");
  }
};

export default Protected;

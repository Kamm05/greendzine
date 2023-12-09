import React from "react";
import { useNavigate } from "react-router-dom";

const Tab = ({ screen }) => {
  const navigate = useNavigate();
  return (
    <div
      className="fixed w-full bottom-0 flex items-center justify-between"
      style={{ backgroundColor: "#0F2323" }}
    >
      <div
        className="flex items-center justify-center "
        style={{
          flex: 0.5,
          backgroundColor: screen === "dashboard" && "#5E5E5E82",
          borderRadius: "10px",
        }}
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        <i
          class="fa-solid fa-house p-4"
          style={{ color: "#36A546", width: "50px", height: "50px" }}
        ></i>
      </div>
      <div
        className=" flex  items-center justify-center "
        style={{
          flex: 0.5,
          backgroundColor: screen === "profile" && "#5E5E5E82",
          borderRadius: "10px",
        }}
        onClick={() => {
          navigate("/profile");
        }}
      >
        <i
          class="fa-solid fa-user p-4"
          style={{ color: "#36A546", width: "50px", height: "50px" }}
        ></i>
      </div>
    </div>
  );
};

export default Tab;

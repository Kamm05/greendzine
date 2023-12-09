import React, { useState } from "react";
import Icon from "../../assets/icon.png";
import "./login.css";
import Button from "../../components/Button/Button";
import { toast } from "react-toastify";
import { data } from "../../utils/data";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "" || Password === "") {
      toast.error("please Enter credentials");
      return;
    }

    data.map((item) => {
      console.log(item);
      if (item.user.username === username && item.user.password === Password) {
        toast.success("Login successfull");
        localStorage.setItem("login", true);
        navigate("/dashboard");
      }
    });
  };

  return (
    <div
      className="flex  flex-col items-center justify-center "
      style={{ height: "100vh" }}
    >
      <div
        className=" flex flex-col items-center justify-center mx-auto "
        style={{ height: "40%" }}
      >
        <img
          src={Icon}
          style={{
            width: "90px",
            height: "90px",
          }}
        />
        <p className="text-textgreen text-center mt-4 text-sm">
          #We Are Electric
        </p>

        <form
          className="flex flex-col items-center mt-4"
          onSubmit={handleSubmit}
        >
          <input
            className="mt-2 p-2 px-3"
            placeholder="Email"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <input
            className="mt-4 p-2 px-3"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Button type="submit" />

          <p className="text-textgreen text-xs mt-4">Forgot Password</p>
        </form>
      </div>
    </div>
  );
};

export default Login;

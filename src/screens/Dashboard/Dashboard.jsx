import React from "react";
import ProfilePic from "../../components/ProfilePic/ProfilePic";
import profile from "../../assets/profile.png";
import "./Dashboard.css";
import ProgressBar from "../../components/progressbar/ProgressBar";
import { data1 } from "../../utils/data";
import Tab from "../../components/Tab/Tab";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div
      className="text-white  relative flex flex-col items-center justify-center px-4 "
      style={{ height: "100vh" }}
    >
      <ProfilePic />

      <div className="dashcontainer flex flex-col items-center  pt-0">
        <div className="empcon mb-5 mt-0 pt-0">
          Employee Productivity Dashboard
        </div>
        {data1?.map((item) => (
          <>
            <div
              className="flex items-center justify-between px-5"
              style={{ width: "100%" }}
            >
              <p className="text-sm text-white">Productivity on {item.day}</p>
              <p className="text-sm text-textgreen font-semibold">
                {item.progress} %
              </p>
            </div>
            <div className=" flex  items-start justify-start barcon m-4 ">
              <ProgressBar progress={item.progress} day={item.day} />
            </div>
          </>
        ))}
      </div>

      <img
        src={profile}
        className="proimg"
        onClick={() => {
          navigate("/");
        }}
      />
      <Tab screen={"dashboard"} />
    </div>
  );
};

export default Dashboard;

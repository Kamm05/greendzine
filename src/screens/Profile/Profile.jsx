import React, { useState } from "react";
import ProfilePic from "../../components/ProfilePic/ProfilePic";
import profile from "../../assets/profile.png";
import Tab from "../../components/Tab/Tab";
import User from "../../components/user/User";
import { data2 } from "../../utils/data";
import "./Profile.css";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [list, setList] = useState(data2);

  const handleSearch = () => {
    let filtered = [];
    data2.map((item) => {
      if (item.Name.toLowerCase().includes(search.toLowerCase())) {
        filtered.push(item);
      }
    });
    setList(filtered);
  };

  return (
    <div
      className="text-white  relative flex flex-col items-center  "
      style={{ height: "100vh", paddingTop: "100px", paddingBottom: "100px" }}
    >
      <ProfilePic />
      <img
        src={profile}
        className="proimg z-10"
        onClick={() => {
          navigate("/");
        }}
      />
      <div className=" input1 relative">
        <input
          className="px-3 py-6"
          placeholder="search user"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <i
          class="fa-solid fa-magnifying-glass absolute right-4 top-4 cursor-pointer"
          style={{ color: "grey", width: "20px", height: "20px" }}
          onClick={handleSearch}
        ></i>
      </div>

      <div style={{ width: "100%", paddingTop: "20px", paddingBottom: "60px" }}>
        {list?.map((item, index) => (
          <User item={item} index={index + 1} />
        ))}
      </div>
      <Tab screen={"profile"} />
    </div>
  );
};

export default Profile;

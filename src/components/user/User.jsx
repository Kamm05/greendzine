import React from "react";

const User = ({ item, index }) => {
  return (
    <div
      className="py-10 px-3  mt-4 mx-4 rounded-xl relative"
      style={{
        backgroundColor: "#1F191966",
        width: "80%",
        float: index % 2 == 0 ? "left" : "right",
      }}
    >
      <p className="mt-3 text-gray-500 text-lg font-bold">
        EMP ID :<span className="ml-2 text-gray-200">{index}</span>
      </p>
      <p className="mt-3 text-gray-500 text-lg font-bold">
        Name :<span className="ml-2  text-gray-200">{item.Name}</span>
      </p>
      <p className="mt-3 text-gray-500 text-lg font-bold">
        DOB :<span className="ml-2 text-yellow-700">{item.Dob}</span>
      </p>
      <p className="mt-3 text-gray-500 text-lg font-bold">
        Role :<span className="ml-2 text-green-600">{item.Role}</span>
      </p>

      <div className="absolute right-2 top-4 h-5 w-5 rounded-full flex items-center justify-center border-gray-700 border-2 text-sm text-gray-400 p-4">
        {index}
      </div>
    </div>
  );
};

export default User;

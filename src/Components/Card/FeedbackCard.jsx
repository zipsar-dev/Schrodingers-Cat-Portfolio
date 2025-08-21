import React from "react";

const FeedbackCard = ({ name, role, content, image }) => {
  return (
    <div className="w-full h-[250px] flex items-center justify-between px-5 py-3 rounded-[7px] shadow bg-white">
      <div className="w-[40%] h-full">
        <img src={image} alt="Image" className="w-full h-full" />
      </div>
      <div className="w-[50%]">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-lg text-[#ccc]">{role}</p>
        <p className="mt-2 text-sm text-[#ccc]">"{content}"</p>
      </div>
    </div>
  );
};

export default FeedbackCard;

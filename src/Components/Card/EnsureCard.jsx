import React from "react";

const EnsureCard = ({ image, mainContent, subContent }) => {
  return (
    <div className="border-2 border-[#008081] rounded-2xl px-5 py-3">
      <img src={image} alt="Images" className="w-14 h-14" />
      <h3 className="font-body font-semibold text-lg mt-4">{mainContent}</h3>
      <p className="font-body text-base mt-2">{subContent}</p>
    </div>
  );
};

export default EnsureCard;

import React from "react";

const Tag = ({ title, value }) => {
  return (
    <div className="border-4 drop-shadow-md flex justify-center p-5 gap-3 font-bold text-xl items-center">
      <p className="capitalize">{title}</p>
      <p>{value}</p>
    </div>
  );
};

export default Tag;

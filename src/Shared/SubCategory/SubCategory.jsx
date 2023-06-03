import React from "react";

const SubCategory = ({ header, subHeader }) => {
  return (
    <div className="w-4/12 mx-auto text-center">
      <p className="mb-2 text-yellow-400">---- {subHeader} ----</p>
      <h3 className="text-yellow-400 text-3xl py-2 border-y-2">{header}</h3>
    </div>
  );
};

export default SubCategory;

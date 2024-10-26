import React from "react";

const Ad = ({ size }: { size: "sm" | "md" | "lg" }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm">
      <h1>ad</h1>
    </div>
  );
};

export default Ad;

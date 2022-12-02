import React from "react";

const Container = ({ children }) => {
  return (
    <div className=" w-[1240px]  " style={{ margin: "0 auto" }}>
      {children}
    </div>
  );
};

export default Container;

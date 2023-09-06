import React from "react";

const Items = ({ currentItems }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridGap: "10px",
      }}
    >
      {currentItems.map((item, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            flexDirection: "column",
            border: "solid 1px",
            padding: "5px",
          }}
        >
          <p>{item.id}</p>
          <p>{item.name}</p>
          <p>{item.job}</p>
        </div>
      ))}
    </div>
  );
};

export default Items;

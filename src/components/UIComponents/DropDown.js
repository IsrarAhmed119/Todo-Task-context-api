import React, { useState } from "react";

const DropDown = () => {
  const data = [
    { name: "House", type: ["1-kanal", "2-kanal", "Farm-house"] },
    { name: "Car", type: ["BMW", "Audi", "Ford"] },
    { name: "Shoes", type: ["adidas", "Under Armour", "Bared Footwear"] },
  ];

  const [index, setindex] = useState(0);

  const handleChange = (e) => {
    console.log("handleChange------->", e.target.value);
    let value = e.target.value;

    let position = data.findIndex((x) => x.name === value);

    // console.log(index);

    console.log("index---->>>", position);
    setindex(position);
  };

  return (
    <div>
      <h1>DropDown--------Compo--</h1>
      <div className="DropdwonDiv">
        <label>Choose one option:</label>

        <select onChange={handleChange}>
          {data.map((item, i) => {
            return <option key={i}>{item.name}</option>;
          })}
        </select>

        <label>Choose job type:</label>

        <select>
          {data[index].type.map((item, i) => {
            return <option key={i}>{item}</option>;
          })}
        </select>
      </div>
    </div>
  );
};

export default DropDown;

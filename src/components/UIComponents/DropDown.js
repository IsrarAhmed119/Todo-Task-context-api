import React, { useState, useEffect } from "react";

const DropDown = () => {
  const data = [
   
    { name: "House", type: ["1-kanal", "2-kanal", "Farm-house"] },
    { name: "Car", type: ["BMW", "Audi", "Ford"] },
    { name: "Shoes", type: ["adidas", "Under Armour", "Bared Footwear"] },
  ];

  const [index, setindex] = useState(0);
  const [selectName, setSelectName] = useState();
  const [selectType, setSelectType] = useState();

  useEffect(() => {
    // console.log("I am called only once after the initial render");
  }, []);

  const handleSubmit = (e) => {
    console.log("handleSubmit---->>");
    e.preventDefault();

    console.log(
      "handleSubmit---->>Name-->>" + selectName + "Type-->>" + selectType
    );
  };

  const handleChangeName = (e) => {
    console.log("handleChangeName------->", e.target.value);
    let value = e.target.value;
    setSelectName(value);

    let position = data.findIndex((x) => x.name === value);

    // console.log(index);

    console.log("index---->>>", position);
    console.log("value---->>>", value);
    setindex(position);
  };

  
  const handleChangeType = (e) => {
    console.log("handleChangeType------->", e.target.value);
    let value = e.target.value;
    setSelectType(value);
    let position = data.findIndex((x) => x.name === value);

    // console.log(index);

    console.log("index---->>>", position);
    console.log("value---->>>", value);
    // setindex(position);
  };

    
  

  return (
    <div>
      <h1>DropDown--------Compo--</h1>
      <div className="DropdwonDiv">
        <label>Choose one option:</label>

        <select onChange={handleChangeName}>
          {data.map((item, i) => {
            return (
              <option key={i} value={item.name} >
                {item.name}
              </option>
            );
          })}
        </select>
        
        <label>Choose type:</label>

        <select onChange={handleChangeType}>
          {data[index].type.map((item, i) => {
            return <option key={i}>{item}</option>;
          })}
        </select>

        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div>
        name: {selectName} Type: {selectType}
      </div>
    </div>
  );
};

export default DropDown;

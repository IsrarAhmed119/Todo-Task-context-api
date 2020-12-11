import React, { useState } from "react";

const DropDown = () => {
  const data = [
    { name: "company1", jobs: ["job1-1", "job1-2", "job1-3"] },
    { name: "company2", jobs: ["job2-1", "job2-2", "job2-3"] },
    { name: "company3", jobs: ["job3-1", "job3-2", "job3-3"] },
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
        <label>Choose a company:</label>

        <select onChange={handleChange}>
          {data.map((item, i) => {
            return <option key={i}>{item.name}</option>;
          })}
        </select>
        
        <label>Choose job type:</label>

        <select>
          {data[index].jobs.map((item, i) => {
            return <option key={i}>{item}</option>;
          })}
        </select>
      </div>
    </div>
  );
};

export default DropDown;

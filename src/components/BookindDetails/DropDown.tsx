import React, { FC, useState } from "react";

interface DropDownProps {
  name: string;
  className: string;
  data: any;
}

const DropDown: FC<DropDownProps> = (props) => {
  const [selectValue, setSelectValue] = useState("");

  function handleChange(event: any) {
    let result = event.target.value;
    console.log(result);
    setSelectValue(result);
  }
  return (
    <div className={props.className}>
      <label className="">{props.name}</label>
      <select
        id="countries"
        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none cursor-pointer mt-2"
        onChange={handleChange}
        value={selectValue}
      >
        {props.data.map((item: any, index: any) => (
          <option key={index} value={item.value} disabled={item.disabled}>
            {item.option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;

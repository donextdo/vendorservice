import React, { FC } from "react";

interface DropDownProps {
  name: string;
  className: string;
  data: any;
}

const DorpDown: FC<DropDownProps> = (props) => {
  return (
    <div className={props.className}>
      <label className="">{props.name}</label>
      <select
        id="countries"
        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none cursor-pointer mt-2"
      >
        {props.data.map((item: any, index: any) => (
          <option
            key={index}
            value={item.option}
            disabled={item.disabled}
            selected={item.selected}
          >
            {item.option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DorpDown;

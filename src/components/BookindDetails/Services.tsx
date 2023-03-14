import React, { FC } from "react";

interface ServicesProps {
  name: String;
  className: any;
  services: any;
}

const Services: FC<ServicesProps> = (props) => {
  return (
    <div className={props.className}>
      <label className="">{props.name}</label>
      <select
        id="countries"
        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none cursor-pointer mt-2"
      >
        {props.services.map((item: any, index: any) => {
          return (
            <option key={index} value={item.service}>
              {item.service}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Services;

import React, { FC } from "react";

interface DatePickerProps {
  name: String;
  className: any;
}

const DatePicker: FC<DatePickerProps> = (props) => {
  return (
    <div className={props.className}>
      <label className="">{props.name}</label>
      <input
        type="date"
        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none cursor-pointer mt-2"
      />
    </div>
  );
};

export default DatePicker;

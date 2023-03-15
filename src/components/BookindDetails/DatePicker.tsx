import React, { FC, useState } from "react";

interface DatePickerProps {
  name: String;
  className: any;
  setSelectedDate : any;
}

const DatePicker: FC<DatePickerProps> = (props) => {
  // const [selectedDate, setSelectedDate] = useState('');

  function handleDateChange(event :any) {
    let date = event.target.value;
    console.log(date);
    props.setSelectedDate(date)
  }
  return (
    <div className={props.className}>
      <label className="">{props.name}</label>
      <input
        type="date"
        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none cursor-pointer mt-2"
        onChange={handleDateChange}
      />
    </div>
  );
};

export default DatePicker;

import Select from "react-select";
import { useState, FC } from "react";
import { services } from "@/data/data";


const Services = ({name, setSelectedOptions, selectedOptions, services, className}:any) => {
  const [isChecked, setIsChecked] = useState("");


  function handleMultiSelectChange(selected: any) {  
    console.log(selected)
    setSelectedOptions(selected);
  }
  const handleCheckboxChange = (event: any) => {
    setIsChecked(event.target.value);
};

  return (
    <div className={className}>
      <label className="">{name}</label>
      <Select
        options={services ||services}
        value={selectedOptions}
        isMulti
        onChange={handleMultiSelectChange}
      />
    </div>
  );
};

export default Services;
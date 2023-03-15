import Vender from "@/pages/vender";
import { useEffect, useState } from "react";


const ServiceTable = ({ selectedServices,setSelectedServices,selectedOptions, isDate}: any) => {
    const [selectedTime, setSelectedTime] = useState("");
    const [selectedVendor, setSelectedVendor] = useState("");

    useEffect(() => {
        //  console.log(selectedVendor);
        // console.log(selectedOptions);

        // console.log(selectedTime);
    }, [selectedVendor, selectedTime]);


    const handleCheckboxChange = (e: any) => {
        setSelectedVendor(e.target.value)
        let id=e.target.parentNode.parentNode.parentNode.parentNode.dataset['id']
        const vendor = e.target.value

        const time = e.target.dataset["time"]
        setSelectedTime(time)
        let services={
         service_id:id,   
         start_time:time,
         vender_id:vendor   
        }
        console.log(selectedServices)
        setSelectedServices((selectedServices: any)=>[...selectedServices.filter((option:any)=>option.service_id!=services.service_id),services])
        // setSelectedTime(e.target.closest('tr').parentNode.querySelector('[data-time]').getAttribute('data-time'));
        // console.log(time)
//         const timeElement = e.target.closest('tr').querySelector('td[data-time]');
//   if (timeElement) {
//     setSelectedTime(timeElement.getAttribute('data-time'));
//   }



    };
    return (
        <div className="mt-6 grid grid-cols-2 gap-4">
            {isDate && selectedOptions.map((option: any) => (
                <div key={option.value} >
                    <h2 className="text-center">{option.label}</h2>
                    <table className="table-auto w-full">
                        <thead>
                            <tr>
                                <th className="px-4 py-2">Time</th>
                                <th className="px-4 py-2">Name</th>
                            </tr>
                        </thead>
                        <tbody data-id={option.label} >
                            <tr>
                                <td className="border-2 px-4 py-2" rowSpan={3} data-time="8.00">8.00</td>
                                <td className="border-2 px-4 py-2">
                                    <label className="inline-flex items-center">
                                        <input type="radio" className="form-checkbox" name={`vender${option.label}`} value="1" data-time="8.00" onChange={handleCheckboxChange} />
                                        <span className="ml-2">Vendor 1</span>
                                    </label>
                                </td>
                            </tr>
                            <tr>

                                <td className="border px-4 py-2">
                                    <label className="inline-flex items-center">
                                        <input type="radio" className="form-checkbox" name={`vender${option.label}`}  value="2" data-time="8.00" onChange={handleCheckboxChange} />
                                        <span className="ml-2">Vendor 2</span>
                                    </label>
                                </td>
                            </tr>
                            <tr>

                                <td className="border px-4 py-2">
                                    <label className="inline-flex items-center">
                                        <input type="radio" className="form-checkbox" name={`vender${option.label}`} value="3" data-time="8.00" onChange={handleCheckboxChange} />
                                        <span className="ml-2">Vendor 3</span>
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <td className="border-2 px-4 py-2" rowSpan={3} data-time="9.00">9.00</td>
                                <td className="border-2 px-4 py-2">
                                    <label className="inline-flex items-center">
                                        <input type="radio" className="form-checkbox" name="vendor" value="Vendor 4" data-time="9.00" onChange={handleCheckboxChange} />
                                        <span className="ml-2">Vendor 1</span>
                                    </label>
                                </td>
                            </tr>
                            <tr>

                                <td className="border px-4 py-2">
                                    <label className="inline-flex items-center">
                                        <input type="radio" className="form-checkbox" name="vendor" value="Vendor 5" data-time="9.00" onChange={handleCheckboxChange} />
                                        <span className="ml-2">Vendor 1</span>
                                    </label>
                                </td>
                            </tr>
                            <tr>

                                <td className="border px-4 py-2">
                                    <label className="inline-flex items-center">
                                        <input type="radio" className="form-checkbox" name="vendor" value="Vendor 6" data-time="9.00" onChange={handleCheckboxChange} />
                                        <span className="ml-2">Vendor 1</span>
                                    </label>
                                </td>
                            </tr><tr>
                                <td className="border-2 px-4 py-2" rowSpan={3} data-time="10.00">10.00</td>
                                <td className="border-2 px-4 py-2">
                                    <label className="inline-flex items-center">
                                        <input type="radio" className="form-checkbox" name="vendor" value="Vendor 7" data-time="10.00" onChange={handleCheckboxChange} />
                                        <span className="ml-2">Vendor 1</span>
                                    </label>
                                </td>
                            </tr>
                            <tr>

                                <td className="border px-4 py-2">
                                    <label className="inline-flex items-center">
                                        <input type="radio" className="form-checkbox" name="vendor" value="Vendor 8" data-time="10.00" onChange={handleCheckboxChange} />
                                        <span className="ml-2">Vendor 1</span>
                                    </label>
                                </td>
                            </tr>
                            <tr>

                                <td className="border px-4 py-2">
                                    <label className="inline-flex items-center">
                                        <input type="radio" className="form-checkbox" name="vendor" value="Vendor 9" data-time="10.00" onChange={handleCheckboxChange} />
                                        <span className="ml-2">Vendor 1</span>
                                    </label>
                                </td>
                            </tr><tr>
                                <td className="border-2 px-4 py-2" rowSpan={3} data-time="11.00">11.00</td>
                                <td className="border-2 px-4 py-2">
                                    <label className="inline-flex items-center">
                                        <input type="radio" className="form-checkbox" name="vendor" value="Vendor 10" onChange={handleCheckboxChange} />
                                        <span className="ml-2">Vendor 1</span>
                                    </label>
                                </td>
                            </tr>
                            <tr>

                                <td className="border px-4 py-2">
                                    <label className="inline-flex items-center">
                                        <input type="radio" className="form-checkbox" name="vendor" value="Vendor 11" onChange={handleCheckboxChange} />
                                        <span className="ml-2">Vendor 1</span>
                                    </label>
                                </td>
                            </tr>
                            <tr>

                                <td className="border px-4 py-2">
                                    <label className="inline-flex items-center">
                                        <input type="radio" className="form-checkbox" name="vendor" value="Vendor 12" onChange={handleCheckboxChange} />
                                        <span className="ml-2">Vendor 1</span>
                                    </label>
                                </td>
                            </tr><tr>
                                <td className="border-2 px-4 py-2" rowSpan={3} data-time="12.00">12.00</td>
                                <td className="border-2 px-4 py-2">
                                    <label className="inline-flex items-center">
                                        <input type="radio" className="form-checkbox" name="vendor" value="Vendor 13" onChange={handleCheckboxChange} />
                                        <span className="ml-2">Vendor 1</span>
                                    </label>
                                </td>
                            </tr>
                            <tr>

                                <td className="border px-4 py-2">
                                    <label className="inline-flex items-center">
                                        <input type="radio" className="form-checkbox" name="vendor" value="Vendor 14" onChange={handleCheckboxChange} />
                                        <span className="ml-2">Vendor 1</span>
                                    </label>
                                </td>
                            </tr>
                            <tr>

                                <td className="border px-4 py-2">
                                    <label className="inline-flex items-center">
                                        <input type="radio" className="form-checkbox" name="vendor" value="Vendor 15" onChange={handleCheckboxChange} />
                                        <span className="ml-2">Vendor 1</span>
                                    </label>
                                </td>
                            </tr><tr>
                                <td className="border-2 px-4 py-2" rowSpan={3} data-time="13.00">13.00</td>
                                <td className="border-2 px-4 py-2">
                                    <label className="inline-flex items-center">
                                        <input type="radio" className="form-checkbox" name="vendor" value="Vendor 16" onChange={handleCheckboxChange} />
                                        <span className="ml-2">Vendor 1</span>
                                    </label>
                                </td>
                            </tr>
                            <tr>

                                <td className="border px-4 py-2">
                                    <label className="inline-flex items-center">
                                        <input type="radio" className="form-checkbox" name="vendor" value="Vendor 17" onChange={handleCheckboxChange} />
                                        <span className="ml-2">Vendor 1</span>
                                    </label>
                                </td>
                            </tr>
                            <tr>

                                <td className="border px-4 py-2">
                                    <label className="inline-flex items-center">
                                        <input type="radio" className="form-checkbox" name="vendor" value="Vendor 18" onChange={handleCheckboxChange} />
                                        <span className="ml-2">Vendor 1</span>
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <td className="border-2 px-4 py-2" rowSpan={3} data-time="14.00">14.00</td>
                                <td className="border-2 px-4 py-2">
                                    <label className="inline-flex items-center">
                                        <input type="radio" className="form-checkbox" name="vendor" value="Vendor 19" onChange={handleCheckboxChange} />
                                        <span className="ml-2">Vendor 1</span>
                                    </label>
                                </td>
                            </tr>
                            <tr>

                                <td className="border px-4 py-2">
                                    <label className="inline-flex items-center">
                                        <input type="radio" className="form-checkbox" name="vendor" value="Vendor 20" onChange={handleCheckboxChange} />
                                        <span className="ml-2">Vendor 1</span>
                                    </label>
                                </td>
                            </tr>
                            <tr>

                                <td className="border px-4 py-2">
                                    <label className="inline-flex items-center">
                                        <input type="radio" className="form-checkbox" name="vendor" value="Vendor 21" onChange={handleCheckboxChange} />
                                        <span className="ml-2">Vendor 1</span>
                                    </label>
                                </td>
                            </tr><tr>
                                <td className="border-2 px-4 py-2" rowSpan={3} data-time="15.00">15.00</td>
                                <td className="border-2 px-4 py-2">
                                    <label className="inline-flex items-center">
                                        <input type="radio" className="form-checkbox" name="vendor" value="Vendor 22" onChange={handleCheckboxChange} />
                                        <span className="ml-2">Vendor 1</span>
                                    </label>
                                </td>
                            </tr>
                            <tr>

                                <td className="border px-4 py-2">
                                    <label className="inline-flex items-center">
                                        <input type="radio" className="form-checkbox" name="vendor" value="Vendor 23" onChange={handleCheckboxChange} />
                                        <span className="ml-2">Vendor 1</span>
                                    </label>
                                </td>
                            </tr>
                            <tr>

                                <td className="border px-4 py-2">
                                    <label className="inline-flex items-center">
                                        <input type="radio" className="form-checkbox" name="vendor" value="Vendor 24" onChange={handleCheckboxChange} />
                                        <span className="ml-2">Vendor 1</span>
                                    </label>
                                </td>
                            </tr><tr>
                                <td className="border-2 px-4 py-2" rowSpan={3} data-time="16.00">16.00</td>
                                <td className="border-2 px-4 py-2">
                                    <label className="inline-flex items-center">
                                        <input type="radio" className="form-checkbox" name="vendor" value="Vendor 25" onChange={handleCheckboxChange} />
                                        <span className="ml-2">Vendor 1</span>
                                    </label>
                                </td>
                            </tr>
                            <tr>

                                <td className="border px-4 py-2">
                                    <label className="inline-flex items-center">
                                        <input type="radio" className="form-checkbox" name="vendor" value="Vendor 26" onChange={handleCheckboxChange} />
                                        <span className="ml-2">Vendor 1</span>
                                    </label>
                                </td>
                            </tr>
                            <tr>

                                <td className="border px-4 py-2">
                                    <label className="inline-flex items-center">
                                        <input type="radio" className="form-checkbox" name="vendor" value="Vendor 27" onChange={handleCheckboxChange} />
                                        <span className="ml-2">Vendor 1</span>
                                    </label>
                                </td>
                            </tr><tr>
                                <td className="border-2 px-4 py-2" rowSpan={3} data-time="17.00">17.00</td>
                                <td className="border-2 px-4 py-2">
                                    <label className="inline-flex items-center">
                                        <input type="radio" className="form-checkbox" name="vendor" value="Vendor 28" onChange={handleCheckboxChange} />
                                        <span className="ml-2">Vendor 1</span>
                                    </label>
                                </td>
                            </tr>
                            <tr>

                                <td className="border px-4 py-2">
                                    <label className="inline-flex items-center">
                                        <input type="radio" className="form-checkbox" name="vendor" value="Vendor 29" onChange={handleCheckboxChange} />
                                        <span className="ml-2">Vendor 1</span>
                                    </label>
                                </td>
                            </tr>
                            <tr>

                                <td className="border px-4 py-2">
                                    <label className="inline-flex items-center">
                                        <input type="radio" className="form-checkbox" name="vendor" value="Vendor 30" onChange={handleCheckboxChange} />
                                        <span className="ml-2">Vendor 1</span>
                                    </label>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            ))}

        </div>
    );
}

export default ServiceTable;
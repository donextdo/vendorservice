import { useEffect, useState } from "react";


const ServiceTable = ({ selectedOptions }: any) => {
    const [selectedVendor, setSelectedVendor] = useState("");
    const [selectedTime, setSelectedTime] = useState("");

    useEffect(() => {
        console.log(selectedVendor);
        console.log(selectedTime);
      }, [selectedVendor, selectedTime]);
      

    const handleCheckboxChange = (e: any) => {
        setSelectedVendor(e.target.value);
        setSelectedTime(e.target.parentNode.parentNode.parentNode.childNodes[0].textContent);

    };
    return (
        <div className="mt-6 grid grid-cols-2 gap-4">
            {selectedOptions.map((option: any) => (
                <div key={option.value} >
                    <h2 className="text-center">{option.label}</h2>
                    <table className="table-auto w-full">
                        <thead>
                            <tr>
                                <th className="px-4 py-2">Time</th>
                                <th className="px-4 py-2">Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border-2 px-4 py-2" rowSpan={3}>8.00</td>
                                <td className="border-2 px-4 py-2">
                                    <label className="inline-flex items-center">
                                        <input type="radio" className="form-checkbox" name="vendor" value="Vendor 1" onChange={handleCheckboxChange} />
                                        <span className="ml-2">Vendor 1</span>
                                    </label>
                                </td>
                            </tr>
                            <tr>

                                <td className="border px-4 py-2">
                                    <label className="inline-flex items-center">
                                        <input type="radio" className="form-checkbox" name="vendor" value="Vendor 2" onChange={handleCheckboxChange} />
                                        <span className="ml-2">Vendor 1</span>
                                    </label>
                                </td>
                            </tr>
                            <tr>

                                <td className="border px-4 py-2">
                                    <label className="inline-flex items-center">
                                        <input type="radio" className="form-checkbox" name="vendor" value="Vendor 3" onChange={handleCheckboxChange} />
                                        <span className="ml-2">Vendor 1</span>
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <td className="border-2 px-4 py-2" rowSpan={3}>9.00</td>
                                <td className="border-2 px-4 py-2">
                                    <label className="inline-flex items-center">
                                        <input type="radio" className="form-checkbox" name="vendor" value="Vendor 4" onChange={handleCheckboxChange} />
                                        <span className="ml-2">Vendor 1</span>
                                    </label>
                                </td>
                            </tr>
                            <tr>

                                <td className="border px-4 py-2">
                                    <label className="inline-flex items-center">
                                        <input type="radio" className="form-checkbox" name="vendor" value="Vendor 5" onChange={handleCheckboxChange} />
                                        <span className="ml-2">Vendor 1</span>
                                    </label>
                                </td>
                            </tr>
                            <tr>

                                <td className="border px-4 py-2">
                                    <label className="inline-flex items-center">
                                        <input type="radio" className="form-checkbox" name="vendor" value="Vendor 6" onChange={handleCheckboxChange} />
                                        <span className="ml-2">Vendor 1</span>
                                    </label>
                                </td>
                            </tr><tr>
                                <td className="border-2 px-4 py-2" rowSpan={3}>10.00</td>
                                <td className="border-2 px-4 py-2">
                                    <label className="inline-flex items-center">
                                        <input type="radio" className="form-checkbox" name="vendor" value="Vendor 2" onChange={handleCheckboxChange} />
                                        <span className="ml-2">Vendor 1</span>
                                    </label>
                                </td>
                            </tr>
                            <tr>

                                <td className="border px-4 py-2">
                                    <label className="inline-flex items-center">
                                        <input type="radio" className="form-checkbox" name="vendor" value="Vendor 2" onChange={handleCheckboxChange} />
                                        <span className="ml-2">Vendor 1</span>
                                    </label>
                                </td>
                            </tr>
                            <tr>

                                <td className="border px-4 py-2">
                                    <label className="inline-flex items-center">
                                        <input type="radio" className="form-checkbox" name="vendor" value="Vendor 2" onChange={handleCheckboxChange} />
                                        <span className="ml-2">Vendor 1</span>
                                    </label>
                                </td>
                            </tr><tr>
                                <td className="border-2 px-4 py-2" rowSpan={3}>11.00</td>
                                <td className="border-2 px-4 py-2">
                                    <label className="inline-flex items-center">
                                        <input type="radio" className="form-checkbox" name="vendor" value="Vendor 2" onChange={handleCheckboxChange} />
                                        <span className="ml-2">Vendor 1</span>
                                    </label>
                                </td>
                            </tr>
                            <tr>

                                <td className="border px-4 py-2">
                                    <label className="inline-flex items-center">
                                        <input type="radio" className="form-checkbox" name="vendor" value="Vendor 2" onChange={handleCheckboxChange} />
                                        <span className="ml-2">Vendor 1</span>
                                    </label>
                                </td>
                            </tr>
                            <tr>

                                <td className="border px-4 py-2">
                                    <label className="inline-flex items-center">
                                        <input type="radio" className="form-checkbox" name="vendor" value="Vendor 2" onChange={handleCheckboxChange} />
                                        <span className="ml-2">Vendor 1</span>
                                    </label>
                                </td>
                            </tr><tr>
                                <td className="border-2 px-4 py-2" rowSpan={3}>12.00</td>
                                <td className="border-2 px-4 py-2">
                                    <label className="inline-flex items-center">
                                        <input type="radio" className="form-checkbox" name="vendor" value="Vendor 2" onChange={handleCheckboxChange} />
                                        <span className="ml-2">Vendor 1</span>
                                    </label>
                                </td>
                            </tr>
                            <tr>

                                <td className="border px-4 py-2">
                                    <label className="inline-flex items-center">
                                        <input type="radio" className="form-checkbox" name="vendor" value="Vendor 2" onChange={handleCheckboxChange} />
                                        <span className="ml-2">Vendor 1</span>
                                    </label>
                                </td>
                            </tr>
                            <tr>

                                <td className="border px-4 py-2">
                                    <label className="inline-flex items-center">
                                        <input type="radio" className="form-checkbox" name="vendor" value="Vendor 2" onChange={handleCheckboxChange} />
                                        <span className="ml-2">Vendor 1</span>
                                    </label>
                                </td>
                            </tr><tr>
                                <td className="border-2 px-4 py-2" rowSpan={3}>13.00</td>
                                <td className="border-2 px-4 py-2">
                                    <label className="inline-flex items-center">
                                        <input type="radio" className="form-checkbox" name="vendor" value="Vendor 2" onChange={handleCheckboxChange} />
                                        <span className="ml-2">Vendor 1</span>
                                    </label>
                                </td>
                            </tr>
                            <tr>

                                <td className="border px-4 py-2">
                                    <label className="inline-flex items-center">
                                        <input type="radio" className="form-checkbox" name="vendor" value="Vendor 2" onChange={handleCheckboxChange} />
                                        <span className="ml-2">Vendor 1</span>
                                    </label>
                                </td>
                            </tr>
                            <tr>

                                <td className="border px-4 py-2">
                                    <label className="inline-flex items-center">
                                        <input type="radio" className="form-checkbox" name="vendor" value="Vendor 2" onChange={handleCheckboxChange} />
                                        <span className="ml-2">Vendor 1</span>
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <td className="border-2 px-4 py-2" rowSpan={3}>14.00</td>
                                <td className="border-2 px-4 py-2">
                                    <label className="inline-flex items-center">
                                        <input type="radio" className="form-checkbox" name="vendor" value="Vendor 2" onChange={handleCheckboxChange} />
                                        <span className="ml-2">Vendor 1</span>
                                    </label>
                                </td>
                            </tr>
                            <tr>

                                <td className="border px-4 py-2">
                                    <label className="inline-flex items-center">
                                        <input type="radio" className="form-checkbox" name="vendor" value="Vendor 2" onChange={handleCheckboxChange} />
                                        <span className="ml-2">Vendor 1</span>
                                    </label>
                                </td>
                            </tr>
                            <tr>

                                <td className="border px-4 py-2">
                                    <label className="inline-flex items-center">
                                        <input type="radio" className="form-checkbox" name="vendor" value="Vendor 2" onChange={handleCheckboxChange} />
                                        <span className="ml-2">Vendor 1</span>
                                    </label>
                                </td>
                            </tr><tr>
                                <td className="border-2 px-4 py-2" rowSpan={3}>15.00</td>
                                <td className="border-2 px-4 py-2">
                                    <label className="inline-flex items-center">
                                        <input type="radio" className="form-checkbox" name="vendor" value="Vendor 2" onChange={handleCheckboxChange} />
                                        <span className="ml-2">Vendor 1</span>
                                    </label>
                                </td>
                            </tr>
                            <tr>

                                <td className="border px-4 py-2">
                                    <label className="inline-flex items-center">
                                        <input type="radio" className="form-checkbox" name="vendor" value="Vendor 2" onChange={handleCheckboxChange} />
                                        <span className="ml-2">Vendor 1</span>
                                    </label>
                                </td>
                            </tr>
                            <tr>

                                <td className="border px-4 py-2">
                                    <label className="inline-flex items-center">
                                        <input type="radio" className="form-checkbox" name="vendor" value="Vendor 2" onChange={handleCheckboxChange} />
                                        <span className="ml-2">Vendor 1</span>
                                    </label>
                                </td>
                            </tr><tr>
                                <td className="border-2 px-4 py-2" rowSpan={3}>16.00</td>
                                <td className="border-2 px-4 py-2">
                                    <label className="inline-flex items-center">
                                        <input type="radio" className="form-checkbox" name="vendor" value="Vendor 2" onChange={handleCheckboxChange} />
                                        <span className="ml-2">Vendor 1</span>
                                    </label>
                                </td>
                            </tr>
                            <tr>

                                <td className="border px-4 py-2">
                                    <label className="inline-flex items-center">
                                        <input type="radio" className="form-checkbox" name="vendor" value="Vendor 2" onChange={handleCheckboxChange} />
                                        <span className="ml-2">Vendor 1</span>
                                    </label>
                                </td>
                            </tr>
                            <tr>

                                <td className="border px-4 py-2">
                                    <label className="inline-flex items-center">
                                        <input type="radio" className="form-checkbox" name="vendor" value="Vendor 2" onChange={handleCheckboxChange} />
                                        <span className="ml-2">Vendor 1</span>
                                    </label>
                                </td>
                            </tr><tr>
                                <td className="border-2 px-4 py-2" rowSpan={3}>17.00</td>
                                <td className="border-2 px-4 py-2">
                                    <label className="inline-flex items-center">
                                        <input type="radio" className="form-checkbox" name="vendor" value="Vendor 2" onChange={handleCheckboxChange} />
                                        <span className="ml-2">Vendor 1</span>
                                    </label>
                                </td>
                            </tr>
                            <tr>

                                <td className="border px-4 py-2">
                                    <label className="inline-flex items-center">
                                        <input type="radio" className="form-checkbox" name="vendor" value="Vendor 2" onChange={handleCheckboxChange} />
                                        <span className="ml-2">Vendor 1</span>
                                    </label>
                                </td>
                            </tr>
                            <tr>

                                <td className="border px-4 py-2">
                                    <label className="inline-flex items-center">
                                        <input type="radio" className="form-checkbox" name="vendor" value="Vendor 2" onChange={handleCheckboxChange} />
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
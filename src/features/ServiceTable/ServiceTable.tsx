import { useState } from "react";


const ServiceTable = () => {
    const [isChecked, setIsChecked] = useState("");

const handleCheckboxChange = (event:any) => {
    setIsChecked(event.target.value);
  };
    return (
        <div className="container mx-auto mt-5  ">
             {/* <p>{isChecked ? 'Checked' : 'Not checked'}</p> */}
            <table className="table-auto w-80">
                <thead>
                    <tr>
                        <th className="px-4 py-2">Time</th>
                        <th className="px-4 py-2">Name</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border-2 px-4 py-2">8.00</td>
                        <td className="border-2 px-4 py-2">
                            <ul>
                                <li>
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" className="form-checkbox" name="age"  value={isChecked} onChange={handleCheckboxChange}/>
                                        <span className="ml-2">Vendor 1</span>
                                    </label>
                                </li>
                                <li>
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" className="form-checkbox" name="location" value="Vendor 2" />
                                        <span className="ml-2">Vendor 2</span>
                                    </label>
                                </li>
                                <li>
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" className="form-checkbox" name="occupation" value="Vendor 3" />
                                        <span className="ml-2">Vendor 3</span>
                                    </label>
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">9.00</td>
                        <td className="border px-4 py-2">
                            <ul>
                                <li>
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" className="form-checkbox" name="age" value="28" />
                                        <span className="ml-2">Vendor 4</span>
                                    </label>
                                </li>
                                <li>
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" className="form-checkbox" name="location" value="london" />
                                        <span className="ml-2">Vendor 1</span>
                                    </label>
                                </li>
                                <li>
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" className="form-checkbox" name="occupation" value="designer" />
                                        <span className="ml-2">Vendor 1</span>
                                    </label>
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">10.00</td>
                        <td className="border px-4 py-2">
                            <ul>
                                <li>
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" className="form-checkbox" name="age" value="28" />
                                        <span className="ml-2">Vendor 1</span>
                                    </label>
                                </li>
                                <li>
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" className="form-checkbox" name="location" value="london" />
                                        <span className="ml-2">Vendor 1</span>
                                    </label>
                                </li>
                                <li>
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" className="form-checkbox" name="occupation" value="designer" />
                                        <span className="ml-2">Vendor 1</span>
                                    </label>
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">11.00</td>
                        <td className="border px-4 py-2">
                            <ul>
                                <li>
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" className="form-checkbox" name="age" value="28" />
                                        <span className="ml-2">Vendor 1</span>
                                    </label>
                                </li>
                                <li>
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" className="form-checkbox" name="location" value="london" />
                                        <span className="ml-2">Vendor 1</span>
                                    </label>
                                </li>
                                <li>
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" className="form-checkbox" name="occupation" value="designer" />
                                        <span className="ml-2">Vendor 1</span>
                                    </label>
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">12.00</td>
                        <td className="border px-4 py-2">
                            <ul>
                                <li>
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" className="form-checkbox" name="age" value="28" />
                                        <span className="ml-2">Vendor 1</span>
                                    </label>
                                </li>
                                <li>
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" className="form-checkbox" name="location" value="london" />
                                        <span className="ml-2">Vendor 1</span>
                                    </label>
                                </li>
                                <li>
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" className="form-checkbox" name="occupation" value="designer" />
                                        <span className="ml-2">Vendor 1</span>
                                    </label>
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">13.00</td>
                        <td className="border px-4 py-2">
                            <ul>
                                <li>
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" className="form-checkbox" name="age" value="28" />
                                        <span className="ml-2">Vendor 1</span>
                                    </label>
                                </li>
                                <li>
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" className="form-checkbox" name="location" value="london" />
                                        <span className="ml-2">Vendor 1</span>
                                    </label>
                                </li>
                                <li>
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" className="form-checkbox" name="occupation" value="designer" />
                                        <span className="ml-2">Vendor 1</span>
                                    </label>
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">14.00</td>
                        <td className="border px-4 py-2">
                            <ul>
                                <li>
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" className="form-checkbox" name="age" value="28" />
                                        <span className="ml-2">Vendor 1</span>
                                    </label>
                                </li>
                                <li>
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" className="form-checkbox" name="location" value="london" />
                                        <span className="ml-2">Vendor 1</span>
                                    </label>
                                </li>
                                <li>
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" className="form-checkbox" name="occupation" value="designer" />
                                        <span className="ml-2">Vendor 1</span>
                                    </label>
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">15.00</td>
                        <td className="border px-4 py-2">
                            <ul>
                                <li>
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" className="form-checkbox" name="age" value="28" />
                                        <span className="ml-2">Vendor 1</span>
                                    </label>
                                </li>
                                <li>
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" className="form-checkbox" name="location" value="london" />
                                        <span className="ml-2">Vendor 1</span>
                                    </label>
                                </li>
                                <li>
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" className="form-checkbox" name="occupation" value="designer" />
                                        <span className="ml-2">Vendor 1</span>
                                    </label>
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">16.00</td>
                        <td className="border px-4 py-2">
                            <ul>
                                <li>
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" className="form-checkbox" name="age" value="28" />
                                        <span className="ml-2">Vendor 1</span>
                                    </label>
                                </li>
                                <li>
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" className="form-checkbox" name="location" value="london" />
                                        <span className="ml-2">Vendor 1</span>
                                    </label>
                                </li>
                                <li>
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" className="form-checkbox" name="occupation" value="designer" />
                                        <span className="ml-2">Vendor 1</span>
                                    </label>
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">17.00</td>
                        <td className="border px-4 py-2">
                            <ul>
                                <li>
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" className="form-checkbox" name="age" value="28" />
                                        <span className="ml-2">Vendor 1</span>
                                    </label>
                                </li>
                                <li>
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" className="form-checkbox" name="location" value="london" />
                                        <span className="ml-2">Vendor 1</span>
                                    </label>
                                </li>
                                <li>
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" className="form-checkbox" name="occupation" value="designer" />
                                        <span className="ml-2">Vendor 1</span>
                                    </label>
                                </li>
                            </ul>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    );
}

export default ServiceTable;
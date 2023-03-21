import DatePicker from "@/components/BookindDetails/DatePicker";
import DropDown from "@/components/BookindDetails/DropDown";
import Services from "@/components/BookindDetails/Services";
import { data, services } from "@/data/data";
import ServiceTable from "../ServiceTable/ServiceTable";
import { GrFormClose } from "react-icons/gr";
import {useEffect, useState} from "react";
import axios from "axios";
import {BASE_URL} from './../../../config'
interface BookingInterface {
    squarefeet: String;
    services: any;
    date : any;
    address:any;
    }

const BookingPopup = ({ setModal, setVendor, vendor }: any) => {
  const [selectedOptions, setSelectedOptions] = useState<any>([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectValue, setSelectValue] = useState("");
  const [address, setAddress] = useState('');
  const [selectedVendor, setSelectedVendor] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedServices, setSelectedServices] = useState<any>([]);
    const [squareFeet, setSquareFeet] = useState([])

  const handleInputChange = (event:any) => {
    setAddress(event.target.value);
  };


    const handleClose = () => {
        setModal(false);
    };
    const addBook = async() => {
        const venderObject = {
            square_feet_id:parseInt(selectValue),
            date : selectedDate,
            Service_data:selectedServices,
            address:address
        }
        console.log(venderObject)
      await  axios({
            method: "post",
            url: BASE_URL+"/api/booking",
            data: venderObject,
            headers: { "Content-Type": "multipart/form-data","Authorization":`Bearer ${localStorage.getItem('access')}`},
          })
      .then((response) => {
     console.log(response)
      })
      .catch((error) => {
        console.error(error);
      });
        setSelectedServices([]);
    }

    useEffect(() => {
        fetchSquareFeet()
    }, [])

    async function fetchSquareFeet() {
        await axios({
            method: "get",
            url: BASE_URL + "/api/square-feet",
            headers: {"Content-Type": "multipart/form-data", "Authorization": `Bearer ${localStorage.getItem('access')}`},
        })
            .then((response) => {
                setSquareFeet(response.data);
                console.log(response.data)
            })
            .catch((error) => {
                console.error(error);
            });
    }

    return (
        <div className="fixed inset-0 z-50 grid place-items-center bg-slate-900 bg-opacity-10 ">
            <div className="py-6 px-4 flex gap-6 flex-col bg-white shadow-md rounded-md w-8/12 overflow-y-auto h-5/6">
                <section className="flex justify-end">
                    <div className="fixed">
                        <button
                            className="bg-blue-500  text-white py-2 px-4 rounded-md"
                            onClick={handleClose}
                        >
                            <GrFormClose className="text-xl" />
                        </button>
                    </div>
                </section>
                <div className="mx-auto w-10/12 bg-slate-100 p-10 rounded-md">
                    <DropDown
                        name="Number Of Square Feet"
                        data={squareFeet}
                        className={"mb-5"}
                        setSelectValue ={setSelectValue}
                        selectValue={selectValue}
                    />
                    <Services
                        name="Services"
                        className={"mb-5"}
                        services={services}
                        selectedOptions={selectedOptions}
                        setSelectedOptions={setSelectedOptions}
                    />

                    <DatePicker name="Date" className={"mb-5"} setSelectedDate={setSelectedDate}/>

                    <label className="">Address</label>
                    <input type="text" onChange={handleInputChange} value={address} className="w-full h-10  rounded-md mt-2 mb-5 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none cursor-pointer" />

                    <ServiceTable
                        selectedOptions={selectedOptions}
                        setSelectedOptions={setSelectedOptions}
                        isDate={selectedDate ? true : false}
                        setSelectedVendor={setSelectedVendor}
                        setSelectedTime={setSelectedTime}
                        setSelectedServices={setSelectedServices}
                        selectedServices={selectedServices}
                    />
                                <button className="border my-2 border-blue-500 py-2 px-4 bg-blue-500 text-white rounded-md" onClick={addBook}>Add booking</button>

                </div>
            </div>
        </div>
    );
};

export default BookingPopup;

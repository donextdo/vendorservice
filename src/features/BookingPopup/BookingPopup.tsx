import DatePicker from "@/components/BookindDetails/DatePicker";
import DropDown from "@/components/BookindDetails/DropDown";
import Services from "@/components/BookindDetails/Services";
import { data, services } from "@/data/data";
import ServiceTable from "../ServiceTable/ServiceTable";
import { GrFormClose } from "react-icons/gr";
import { useState } from "react";

const BookingPopup = ({ setModal, setVendor, vendor }: any) => {
    const [selectedOptions, setSelectedOptions] = useState<any>([]);
  const [selectedDate, setSelectedDate] = useState('');


    const handleClose = () => {
        setModal(false);
    };

    const venderObject = {
        date : selectedDate,
    }

    // setVendor([...venderObject,vendor])
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
                        data={data}
                        className={"mb-5"}
                    />

                    <Services
                        name="Services"
                        className={"mb-5"}
                        services={services}
                        selectedOptions={selectedOptions}
                        setSelectedOptions={setSelectedOptions}
                    />

                    <DatePicker name="Date" className={"mb-5"} setSelectedDate={setSelectedDate}/>

                    <ServiceTable
                        selectedOptions={selectedOptions}
                        setSelectedOptions={setSelectedOptions}
                        isDate={selectedDate ? true : false}
                    />
                </div>
            </div>
        </div>
    );
};

export default BookingPopup;

import DatePicker from "@/components/BookindDetails/DatePicker";
import DorpDown from "@/components/BookindDetails/DorpDown";
import Services from "@/components/BookindDetails/Services";
import { data, services } from "@/data/data";
import ServiceTable from "../ServiceTable/ServiceTable";

const BookingPopup = ({ setModal }: any) => {
    const handleClose = () => {
        setModal(false)
    }
    return (
        <div className="fixed inset-0 z-50 grid place-items-center bg-slate-900 bg-opacity-10 mx-4">
            <div className="py-6 px-4 flex gap-6 flex-col relative bg-white shadow-md rounded-md w-full overflow-y-auto h-5/6">

                <div className="flex justify-end"><button className="bg-blue-500  text-white py-2 px-4 rounded-md" onClick={handleClose}>Close</button></div>
                <div className="mx-auto w-8/12 bg-slate-100 p-10 rounded-md">

                    <DorpDown name="Number of Square fect" data={data} className={"mb-5"} />

                    <Services name="Services" className={"mb-5"} services={services} />

                    <DatePicker name="Date" className={"mb-5"} />
                    <ServiceTable />
                </div>
            </div>
        </div>
    );
}

export default BookingPopup;
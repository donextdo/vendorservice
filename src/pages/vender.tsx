import BookingPopup from "@/features/BookingPopup/BookingPopup";
import { useState } from "react";
import axios from "axios";
import {BASE_URL} from './../../config'
const Vender = () => {
    const [isColor, setIsColor] = useState(1);
    const [modal, setModal] = useState(false)
    const [vendor, setVendor] = useState([])
    const [bookings, setBookings] = useState([])
let session
    if (typeof window !== 'undefined') {
       session= localStorage.getItem('access')      }
    const handleChange = (id: any) => {
        setIsColor(id);

    }
    axios({
        method: "get",
        url: BASE_URL+"/api/booking",
            headers: { "Content-Type": "multipart/form-data","Authorization":`Bearer ${session}`},
    })
  .then((response) => {
   setBookings(response.data);
   
  })
  .catch((error) => {
    console.error(error);
  });
    const handleClick = () => {
        setModal(!modal)
    }
    return (
        <div className="container mx-auto mt-4">

            <div className=' flex space-x-8 justify-center text-gray-400'>
                <button className={`px-4 py-3 border-b-2  ${isColor === 1 ? 'border-blue-500' : 'border-white'}`}
                    onClick={() => handleChange(1)}>VENDOR</button>
                
            </div>
            <hr />

            <div className="flex justify-between px-4 mt-6"> 
            <p className="text-xl font-semibold">Vendor Booking</p>
            <button className="border border-blue-500 py-2 px-4 bg-blue-500 text-white rounded-md" onClick={handleClick}>Add booking</button>
            </div>

            {
                modal && <BookingPopup setModal={setModal} setVendor={setVendor} vendor={vendor}/>
            }

            <div className="mt-6">
                <table className="w-full border-collapse border-2">
                    <thead>
                        <tr>
                            <th className="p-3 border-2">Name</th>
                            <th className="p-3 border-2">Service</th>
                            <th className="p-3 border-2">Date</th>
                            <th className="p-3 border-2">Time</th>
                            <th className="p-3 border-2">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                       {bookings.map((item:any,index:any)=>(
                        <tr>
                            <td className="p-3 border-2">{item.vendor.name}</td>
                            <td className="p-3 border-2">{item.start_time}</td>
                            <td className="p-3 border-2">{item.end_time}</td>
                            <td className="p-3 border-2">{item.service.name}</td>
                            <td className="p-3 border-2">{item.date}</td>
                        </tr>))}

                        
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Vender;
import { timeSlotsData } from "@/data/data";
import Vender from "@/pages/vender";
import {useState} from "react"
type Vendor = {
    id: number;
    name: string;
    is_available: boolean;
    service: {
      id: number;
      name: string;
    }[];
  };
  
  type TimeSlot = {
    id: number;
    value: string;
    vendors: Vendor[];
  };
const ServiceTable = ({ selectedServices,setSelectedServices,selectedOptions, isDate}: any) => {

       const [selectedTime, setSelectedTime] = useState("");
       const [selectedVendorId, setSelectedVendorId] = useState<number | null>(null);
    const onVendorSelect=(vender:number)=>{
        setSelectedVendorId(vender)
    }

    const [selectedVendor, setSelectedVendor] = useState<number | null>(null);
  
    const handleVendorSelect = (e:any) => {
      setSelectedVendor(e.target.value);
      let id=e.target.parentNode.parentNode.parentNode.parentNode.dataset['id']
      console.log(id)
      const vendor = e.target.value
      const time = e.target.dataset["time"]  
      console.log(time)
      setSelectedTime(time)
      let services={
       service_id:parseInt(id),   
       start_time:time,
       vendor_id:vendor   
      }
      console.log(services)
      setSelectedServices((selectedServices: any)=>[...selectedServices.filter((option:any)=>option.service_id!=services.service_id),services])
    //   sessionStorage.setItem('selectedItem',JSON.stringify(selectedServices))
    };
  
    return (
        <div className="mt-6 grid grid-cols-2 gap-4">
   { isDate  && selectedOptions.map((option: any) => (
   <div key={option.value}> 
     <h2 className="mx-5">{option.label}</h2>
      <table  className="table">
        <thead>
          <tr>
            <th>Time</th>
            <th>Vendors</th>
          </tr>
        </thead>
        <tbody data-id={option.value}>
        {timeSlotsData.map((timeSlot) => (
          <tr key={timeSlot.id}>
            <td className="border-2 px-4 py-2 time">{timeSlot.value}</td>
            <td  data-time={timeSlot.value}  className="vendors border-2 px-4 py-2 ">
              {timeSlot.vendors.map((vendor) => (
                
                <div key={vendor.id} className="vendor">
                  <input
                    data-time={timeSlot.value}
                    type="radio"
                    id={`vendor-${vendor.id}`}
                    name={`vendor-${option.value}`} // make name unique for each row
                    value={vendor.id}
                    // checked={selectedVendor === vendor.id}
                    onChange={ handleVendorSelect}
                   disabled={!vendor.is_available }
                    // disable same names in other rows
                  />
                  <label htmlFor={`vendor-${vendor.id}`}>{vendor.name}</label>
                </div>
              ))}
            </td>
          </tr>
        ))}
      </tbody>
      </table>
     </div> 
    ))}
   </div>
    );
  };
  
  type TimeSlotRowProps = {
    timeSlot: TimeSlot;
    selectedVendorId: number | null;
    onVendorSelect: (vendorId: number) => void;
  };
  
  const TimeSlotRow = ({ timeSlot, selectedVendorId, onVendorSelect }: TimeSlotRowProps) => {
    const selectedVendor = timeSlot.vendors.find((vendor) => vendor.id === selectedVendorId);
  
    return (
      <tr>
        <td className="time">{timeSlot.value}</td>
        <td className="vendors">
          {timeSlot.vendors.map((vendor) => {
            const isDisabled = selectedVendor !== null && vendor.id !== selectedVendor?.id && vendor.name === selectedVendor?.name;
            return (
              <div key={vendor.id} className="vendor">
                <input
                  type="radio"
                  id={`vendor-${vendor.id}`}
                  name={`vendor-${timeSlot.id}`}
                  value={vendor.id.toString()}
                  checked={selectedVendorId === vendor.id}
                  onChange={() => onVendorSelect(vendor.id)}
                //    disabled={isDisabled || !vendor.is_available}
                />
                <label htmlFor={`vendor-${vendor.id}`}>{vendor.name}</label>
              </div>
            );
          })}
        </td>
      </tr>
    );
  };
  
  export default ServiceTable;
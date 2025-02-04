import { useNavigate } from "react-router-dom";
import SectionTitle from "../../../Componnets/SectonTitle/SectionTitle";

const Pay = () => {
    const navigate = useNavigate()
    const handlePaymentChange=(e)=>{
        const SelectedMethod = e.target.value
        if(SelectedMethod){
            navigate(SelectedMethod)
        }
    }
  return (
    <div>
      <SectionTitle
        heading={"Payment"}
        subHeading={"Please Select Your Method"}
      ></SectionTitle>
      <select className="select select-info w-full max-w-xs"
      onChange={handlePaymentChange}
      defaultValue=''
      >
        <option disabled selected value=''>
          Select Payment Method
        </option>
        <option value="/dashboard/payment">Stripe</option>
        <option value="/dashboard/sslPayment">SSLCOMMERZ</option>
      </select>
    </div>
  );
};

export default Pay;

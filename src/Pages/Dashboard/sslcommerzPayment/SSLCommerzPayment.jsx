import { useNavigate } from "react-router-dom";
import SectionTitle from "../../../Componnets/SectonTitle/SectionTitle";
import useAuth from "../../../hooks/useAuth";
import useCart from "../../../hooks/useCart";
import axios from "axios";

const SSLCommerzPayment = () => {
  const { user } = useAuth();
  const [cart, refetch] = useCart();
  const navigate = useNavigate();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const handleCreatePayment = async () => {
    const payment = {
      email: user?.email,
      price: totalPrice,
      transactionIds: "",
      date: new Date(),
      cartIds: cart?.map((item) => item._id),
      menuItemIds: cart?.map((item) => item.menuId),
      status: "pending",
    };

    const response = await axios.post(
      "http://localhost:5000/create-ssl-payment",
      payment
    );
    console.log("ssl response: ", response);
  };

  const handlePaymentChange = (e) => {
    const SelectedMethod = e.target.value;
    if (SelectedMethod) {
      navigate(SelectedMethod);
    }
  };
  return (
    <div>
      <SectionTitle
        heading={"SSL Payment"}
        subHeading={"Please Pay Taka"}
      ></SectionTitle>
      <select
        className="select select-info w-full max-w-xs"
        onChange={handlePaymentChange}
        defaultValue=""
      >
        <option disabled selected value="">
          Select Payment Method
        </option>
        <option value="/dashboard/payment">Stripe</option>
        <option value="/dashboard/sslPayment">SSLCOMMERZ</option>
      </select>
      <div className="border border-gray-100 rounded-sm p-2 mt-10">
        <h2 className="font-bold text-4xl">Payment Details</h2>
        <p>Complete your order by providing your Payment Details</p>
        {/* <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Email</span>
          </div>
          <input
            type="email "
            placeholder=" @ Type Email"
            className="w-full input input-bordered"
          />
        </label>
        <button className="btn w-full mt-5" onClick={handleCreatePayment}>Place Order</button> */}
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
         
          <div className="form-control mt-6">
            <button className="btn btn-primary" onClick={handleCreatePayment}>Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SSLCommerzPayment;

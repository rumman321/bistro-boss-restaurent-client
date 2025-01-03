import { FaCalendar, FaCalendarCheck, FaCartArrowDown, FaHome, FaShoppingCart, FaStar, FaStarOfLife } from "react-icons/fa";
import { RiMenuSearchFill } from "react-icons/ri";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";

const Dashboard = () => {
    const [cart] = useCart()
  return (
    <div className="flex">
        {/* sidebar */}
      <div className="w-64 min-h-screen bg-orange-500 ">
        <ul className="menu">
          <li>
            
            <NavLink to="/dashboard/cart"><FaShoppingCart></FaShoppingCart> my Cart : {cart.length}</NavLink>
          </li>
          <li>
            
            <NavLink to="/dashboard/userHome"> <FaHome></FaHome> User Home</NavLink>
          </li>
          <li>
            
            <NavLink to="/dashboard/reservation"><FaCalendar></FaCalendar> Reservation</NavLink>
          </li>
         
          <li>
            
            <NavLink to="/dashboard/myBooking"> <FaCalendarCheck></FaCalendarCheck> my Booking</NavLink>
          </li>
          <li>
            
            <NavLink to="/dashboard/review"><FaStar></FaStar> Review</NavLink>
          </li>
          <div className="divider "></div>
          <li>
            
            <NavLink to="/"> <FaHome></FaHome>  Home</NavLink>
          </li>
          <li>
            
            <NavLink to="/menu"> <RiMenuSearchFill /> Menu</NavLink>
          </li>
          
        </ul>
      </div>
        {/* main content */}
      <div className="flex-1 border-green-500 border-2 p-10">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;

import {
  FaAddressBook,
  FaCalendar,
  FaCalendarCheck,
  FaCartArrowDown,
  FaHome,
  FaList,
  FaShoppingCart,
  FaStar,
  FaStarOfLife,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import { RiMenuSearchFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();
  //
  const [isAdmin] = useAdmin();
  console.log("is admin ", isAdmin);
  return (
    <div className="flex">
      {/* sidebar */}
      <div className="w-64 min-h-screen bg-orange-500 ">
        <ul className="menu">
          {isAdmin ? (
            <>
             
              <li>
                <NavLink to="/dashboard/adminHome">
                  {" "}
                  <FaHome></FaHome> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItems">
                <FaUtensils /> Add Items
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/manageItem">
                  {" "}
                  <FaList /> Manage Item
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/booking">
                <FaAddressBook /> Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allUsers">
                <FaUsers /> All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/cart">
                  <FaShoppingCart></FaShoppingCart> my Cart : {cart.length}
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/userHome">
                  {" "}
                  <FaHome></FaHome> User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservation">
                  <FaCalendar></FaCalendar> Reservation
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/paymentHistory">
                  {" "}
                  <FaCalendarCheck></FaCalendarCheck> my Payment
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/review">
                  <FaStar></FaStar> Review
                </NavLink>
              </li>
            </>
          )}
          <div className="divider "></div>
          <li>
            <NavLink to="/">
              {" "}
              <FaHome></FaHome> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              {" "}
              <RiMenuSearchFill /> Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              {" "}
              <MdEmail /> Contact
            </NavLink>
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

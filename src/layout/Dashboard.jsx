import {
  FaAddressBook,
  FaCalendar,
  FaCalendarCheck,
  FaCartArrowDown,
  FaHome,
  FaList,
  FaShoppingCart,
  FaStar,
  FaUsers,
  FaUtensils,
  FaBars, // Added for toggle icon
} from "react-icons/fa";
import { RiMenuSearchFill } from "react-icons/ri";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";
import { useState } from "react";

const Dashboard = () => {
  const [cart] = useCart();
  const [isAdmin] = useAdmin();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for sidebar toggle

  // Function to toggle sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col sm:flex-row">
      {/* Sidebar */}
      <div
        className={`w-full sm:w-64 min-h-screen bg-orange-500 p-4 sm:p-6 ${
          isSidebarOpen ? "block" : "hidden"
        } sm:block`} // Sidebar visibility toggle for mobile (hidden by default)
      >
        <ul className="menu font-bold text-white">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminHome" onClick={() => setIsSidebarOpen(false)}>
                  <FaHome /> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItems" onClick={() => setIsSidebarOpen(false)}>
                  <FaUtensils /> Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItem" onClick={() => setIsSidebarOpen(false)}>
                  <FaList /> Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/feedback" onClick={() => setIsSidebarOpen(false)}>
                  <FaAddressBook /> User Feedback
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allUsers" onClick={() => setIsSidebarOpen(false)}>
                  <FaUsers /> All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/cart" onClick={() => setIsSidebarOpen(false)}>
                  <FaShoppingCart /> My Cart: {cart.length}
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/userHome" onClick={() => setIsSidebarOpen(false)}>
                  <FaHome /> User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservation" onClick={() => setIsSidebarOpen(false)}>
                  <FaCalendar /> Reservation
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/paymentHistory" onClick={() => setIsSidebarOpen(false)}>
                  <FaCalendarCheck /> My Payment
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/review" onClick={() => setIsSidebarOpen(false)}>
                  <FaStar /> Review
                </NavLink>
              </li>
            </>
          )}
          <div className="divider"></div>
          <li>
            <NavLink to="/" onClick={() => setIsSidebarOpen(false)}>
              <FaHome /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu" onClick={() => setIsSidebarOpen(false)}>
              <RiMenuSearchFill /> Menu
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Main content */}
      <div className="flex-1  border-2 p-6">
        <Outlet />
      </div>

      {/* Toggle Sidebar Button (for mobile) */}
      <button
        className="fixed top-4 left-4 sm:hidden text-white bg-orange-500 p-2 rounded-full"
        onClick={toggleSidebar}
      >
        <FaBars />
      </button>
    </div>
  );
};

export default Dashboard;

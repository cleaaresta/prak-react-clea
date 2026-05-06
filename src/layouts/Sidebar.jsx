import { AiFillAppstore, AiFillCustomerService } from "react-icons/ai";
import { TbListDetails } from "react-icons/tb";
import { FaPlus, FaUsers, FaShoppingCart } from "react-icons/fa";
import { MdErrorOutline, MdLockOutline, MdBlock } from "react-icons/md";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 bg-white min-h-screen shadow-md flex flex-col justify-between">
      {/* Logo */}
      <div>
        <div className="p-6">
          <h1 className="text-2xl font-bold">
            Sedap<span className="text-green-500">.</span>
          </h1>
          <p className="text-gray-400 text-sm">Modern Admin Dashboard</p>
        </div>

        {/* Menu */}
        <ul className="mt-6 space-y-2 px-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center gap-3 p-2 rounded cursor-pointer ${isActive ? "bg-green-100 text-green-600 font-semibold" : "hover:bg-gray-100"}`
              }
            >
              <AiFillAppstore />
              Dashboard
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/details"
              className={({ isActive }) =>
                `flex items-center gap-3 p-2 rounded cursor-pointer ${isActive ? "bg-green-100 text-green-600 font-semibold" : "hover:bg-gray-100"}`
              }
            >
              <TbListDetails />
              Details
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `flex items-center gap-3 p-2 rounded cursor-pointer ${isActive ? "bg-green-100 text-green-600 font-semibold" : "hover:bg-gray-100"}`
              }
            >
              <AiFillCustomerService />
              Services
            </NavLink>
          </li>

          <li className="pt-4 pb-2 text-xs font-semibold text-gray-400 uppercase">
            Management
          </li>
          
          <li>
            <NavLink
              to="/customers"
              className={({ isActive }) =>
                `flex items-center gap-3 p-2 rounded cursor-pointer ${isActive ? "bg-green-100 text-green-600 font-semibold" : "hover:bg-gray-100"}`
              }
            >
              <FaUsers />
              Customers
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/orders"
              className={({ isActive }) =>
                `flex items-center gap-3 p-2 rounded cursor-pointer ${isActive ? "bg-green-100 text-green-600 font-semibold" : "hover:bg-gray-100"}`
              }
            >
              <FaShoppingCart />
              Orders
            </NavLink>
          </li>

          <li className="pt-4 pb-2 text-xs font-semibold text-gray-400 uppercase">
            Errors
          </li>

          <li>
            <NavLink
              to="/error-400"
              className={({ isActive }) =>
                `flex items-center gap-3 p-2 rounded cursor-pointer ${isActive ? "bg-red-100 text-red-600 font-semibold" : "hover:bg-gray-100"}`
              }
            >
              <MdErrorOutline />
              Error 400
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/error-401"
              className={({ isActive }) =>
                `flex items-center gap-3 p-2 rounded cursor-pointer ${isActive ? "bg-red-100 text-red-600 font-semibold" : "hover:bg-gray-100"}`
              }
            >
              <MdLockOutline />
              Error 401
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/error-403"
              className={({ isActive }) =>
                `flex items-center gap-3 p-2 rounded cursor-pointer ${isActive ? "bg-red-100 text-red-600 font-semibold" : "hover:bg-gray-100"}`
              }
            >
              <MdBlock />
              Error 403
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Footer tetap */}
      <div className="p-4">
        <div className="bg-green-500 text-white p-4 rounded-lg flex items-center justify-between">
          <div>
            <p className="text-sm mb-2">
              Please organize your menus through button below!
            </p>

            <div className="flex items-center gap-2 bg-white text-green-500 px-3 py-1 rounded cursor-pointer">
              <FaPlus />
              <span>Add Menus</span>
            </div>
          </div>

          <img
            src="public/img/1.jpg"
            className="w-14 h-14 rounded-full border-2 border-white shadow"
            alt="avatar"
          />
        </div>

        <p className="text-xs text-gray-400 mt-4">
          Sedap Restaurant Admin Dashboard
        </p>

        <p className="text-xs text-gray-400">© 2025 All Right Reserved</p>
      </div>
    </div>
  );
}

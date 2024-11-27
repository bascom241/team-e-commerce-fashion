import React from "react";
import { CgProfile } from "react-icons/cg";
import { BsBox } from "react-icons/bs";
import { FaRegAddressCard, FaRegMoneyBillAlt } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";
import { Link } from "react-router-dom";

import { CiLock } from "react-icons/ci";

const Sidebar = () => {
  return (
    <div className="w-full lg:w-1/4  p-6 space-y-6">
      <div>
        <h2 className="text-xl font-bold">Hello, demo fashionista</h2>
        <p className="text-lg text-gray-700">demo@fashionista.com</p>
      </div>
      <ul className="space-y-4 text-lg">
        <li className="flex items-center space-x-3  hover:shadow-lg p-4">
          <span className="text-lg">
            <CgProfile size={28} />
          </span>

          <span>Profile</span>
        </li>
        <Link to="/order">
          <li className="flex items-center space-x-3  hover:shadow-lg p-4">
            <span className="text-lg">
              <BsBox size={28} />
            </span>
            <span>Order</span>
          </li>
        </Link>
        <li className="flex items-center space-x-3  hover:shadow-lg p-4">
          <span className="text-lg">
            <FaRegMoneyBillAlt size={28} />
          </span>
          <span>Transactions</span>
        </li>
        <li className="flex items-center space-x-3  hover:shadow-lg p-4">
          <span className="text-lg">
            <MdAttachMoney size={28} />
          </span>
          <span>Wallet</span>
        </li>
        <li className="flex items-center space-x-3  hover:shadow-lg p-4">
          <span className="text-lg">
            <FaRegAddressCard size={28} />
          </span>
          <span>Manage Addresses</span>
        </li>
        <li className="flex items-center space-x-3  hover:shadow-lg p-4">
          <span className="text-lg">
            <CiLock size={28} />
          </span>
          <span>Logout</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

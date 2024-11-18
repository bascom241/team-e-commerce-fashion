import React from "react";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { BsPersonFillCheck } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="p-10 px-24">
      <div className="flex justify-between">
        <p className="text-4xl font-semibold">Fashionista</p>
        <div className="flex">
          <div className="">
            <input type="text" placeholder="Search" className="" />
          </div>
          <div className="flex gap-3">
            <FaShoppingCart size={30} />
            <FaHeart size={30} />
            <BsPersonFillCheck size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

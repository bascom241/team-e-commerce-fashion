<<<<<<< HEAD
import React from "react";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { BsPersonFillCheck } from "react-icons/bs";
=======

import React from "react";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { BsPersonFillCheck } from "react-icons/bs";

>>>>>>> 7a58a0c38dc6ab9b0695e3abef0fa5f06c789f43

const Navbar = () => {
  return (
    <div className="p-10">
      <div className="flex justify-between">
        <p className="text-4xl font-semibold">Fashionista</p>
        <div className="flex">
          <input type="text" placeholder="Search" />
          <div className="flex gap-3">
            <FaShoppingCart size={30} />
            <FaHeart size={30} />
            <BsPersonFillCheck size={30} />
          </div>
        </div>
      </div>
    </div>
<<<<<<< HEAD
  );
};
=======
  )
};

>>>>>>> 7a58a0c38dc6ab9b0695e3abef0fa5f06c789f43

export default Navbar;

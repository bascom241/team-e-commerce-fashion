import  { useState } from "react";
import { PiShoppingCart } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa6";
import { BsPersonFillCheck, BsSearchHeart, BsList, BsX } from "react-icons/bs";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [timer, setTimer] = useState(null);

  // Handle closing the menu after a delay
  const handleCloseMenu = () => {
    if (timer) clearTimeout(timer);
    const newTimer = setTimeout(() => {
      setOpenMenu(null);
    }, 300); // Adjust the delay as needed
    setTimer(newTimer);
  };

  const handleMouseEnter = (id) => {
    if (timer) clearTimeout(timer);
    setOpenMenu(id); // Open the menu when mouse enters
  };

  const handleMouseLeave = () => {
    handleCloseMenu(); // Set a delay before closing
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuItems = [
    { label: "Home" },
    { label: "Mens Wears", id: "mens", subcategories: ["T-Shirts"] },
    { label: "Kids", id: "kids", subcategories: ["Boys", "Girls"] },
    {
      label: "Western Wear",
      id: "western",
      subcategories: ["Women Dresses", "Women Nighties", "Swimwear", "Kurta"],
    },
    {
      label: "Sports & Activewear",
      id: "sports",
      subcategories: ["Topwear", "Bottomwear", "Shapewear"],
    },
    {
      label: "Men's Clothing",
      id: "clothing",
      subcategories: [
        "T-Shirts & Polos",
        "Casualwear",
        "Suits & Blazers",
        "Mens Kurta",
      ],
    },
    {
      label: "Accessories",
      id: "accessories",
      subcategories: ["Caps", "Ties & Pocket Square", "Cufflinks & Bracelets"],
    },
  ];





  return (
    <div className="p-6 md:px-24">
      <div className="flex justify-between items-center">
        <p className="text-3xl font-semibold cursor-pointer">Fashionista</p>

        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <BsX /> : <BsList />}
        </button>

        <div className="hidden md:flex gap-24 items-center">
          <div className="relative flex items-center w-[350px]">
            <input
              type="text"
              placeholder="Search"
              className="focus:outline-none border py-1 p-8 rounded-lg w-full "
            />
            <BsSearchHeart className="absolute top-1/2 ml-3 transform -translate-y-1/2 text-black" />
          </div>

          <div className="flex items-center gap-3">
            <PiShoppingCart
              size={20}
              className="text-white bg-black p-1 rounded-lg w-9 h-9 flex items-center justify-center cursor-pointer"
            />
            <FaRegHeart
              size={20}
              className="text-white bg-black p-1 rounded-lg w-9 h-9 flex items-center justify-center cursor-pointer"
            />
            <BsPersonFillCheck
              size={20}
              className="text-white bg-black p-1 rounded-lg w-9 h-9 flex items-center justify-center cursor-pointer"
            />
          </div>
        </div>
      </div>

      <div className="border-b-2 mt-6 w-full hidden md:block"></div>

      <div className="hidden md:flex gap-5 justify-between font-medium mt-4 relative">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="relative"
            onMouseEnter={() => handleMouseEnter(item.id)}
            onMouseLeave={handleMouseLeave}
          >
            <button className="hover:text-gray-400 focus:outline-none">
              {item.label}
            </button>

            {openMenu === item.id && item.subcategories && (
              <div className="absolute left-0 mt-2 w-60 bg-white shadow-lg rounded-lg z-10 p-4">
                <p className="font-semibold text-lg mb-2">{item.label}</p>
                <ul>
                  {item.subcategories.map((subcategory, index) => (
                    <li
                      key={index}
                      className="py-1 hover:bg-[#EFF5FF] cursor-pointer"
                    >
                      {subcategory}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="border-b-2 mt-12 w-full hidden md:block"></div>

      {isMobileMenuOpen && (
        <div className="md:hidden mt-6 space-y-4">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search"
              className="focus:outline-none border py-1 pl-6 pr-12 rounded-lg w-full"
            />
            <BsSearchHeart className="absolute top-1/2 transform -translate-y-1/2 text-black" />
          </div>

          <p
            className="text-xl font-medium text-center cursor-pointer "
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span className="border-b-2 p-1 border-black">Home</span>
          </p>

          <div className="flex gap-3 justify-center mt-4">
            <PiShoppingCart
              size={20}
              className="text-white bg-black p-1 rounded-lg w-9 h-9 flex items-center justify-center cursor-pointer"
            />
            <FaRegHeart
              size={20}
              className="text-white bg-black p-1 rounded-lg w-9 h-9 flex items-center justify-center cursor-pointer"
            />
            <BsPersonFillCheck
              size={20}
              className="text-white bg-black p-1 rounded-lg w-9 h-9 flex items-center justify-center cursor-pointer"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

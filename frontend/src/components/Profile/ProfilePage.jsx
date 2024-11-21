import { CgProfile } from "react-icons/cg";
import { BsBox } from "react-icons/bs";
import { FaRegAddressCard } from "react-icons/fa";
import { CiLock } from "react-icons/ci";

const ProfilePage = () => {
  return (
    <div className="flex flex-col lg:flex-row p-6 lg:p-12  min-h-screen">
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
          <li className="flex items-center space-x-3  hover:shadow-lg p-4">
            <span className="text-lg">
              <BsBox size={28} />
            </span>
            <span>Orders</span>
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

      <div className="w-full lg:w-3/4 bg-white rounded-md p-8 ml-0 lg:ml-6 mt-6 lg:mt-0">
        <h1 className="text-3xl font-bold mb-6 text-center">My Profile</h1>
        <form className="space-y-6 flex flex-col justify-center items-center">
          <div className="flex flex-col lg:flex-row gap-6 justify-center">
            <div className="flex gap-6 w-[450px]">
              <div className="w-full">
                <label
                  htmlFor="first-name"
                  className="block mb-3 font-medium text-gray-700"
                >
                  First Name
                </label>
                <input
                  id="first-name"
                  type="text"
                  placeholder="First Name"
                  defaultValue="demo"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
                />
              </div>

              <div className="w-full">
                <label
                  htmlFor="last-name"
                  className="block mb-3 font-medium text-gray-700"
                >
                  Last Name
                </label>
                <input
                  id="last-name"
                  type="text"
                  placeholder="Last Name"
                  defaultValue="fashionista"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-5 items-center">
            <div className="w-full flex flex-col ">
              <label
                htmlFor="email"
                className="block mb-3 font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                defaultValue="demo@fashionista.com"
                className="w-[450px] p-3 border border-gray-300 rounded-md focus:outline-none"
                readOnly
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="phone"
                className="block mb-3 font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="Phone Number"
                defaultValue="3333344453"
                className="w-[450px] p-3 border border-gray-300 rounded-md focus:outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full lg:w-auto px-10 py-4 bg-black text-white font-semibold rounded-md hover:bg-gray-800"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;

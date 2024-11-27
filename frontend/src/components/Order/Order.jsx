import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { FaEye } from "react-icons/fa";

const OrdersPage = () => {
  const orders = [
    {
      id: "#ORD110028700",
      price: "₹700.00",
      date: "06 Jun, 2024 19:10:29",
      status: "Received",
    },
    {
      id: "#ORD788625874",
      price: "₹1540.00",
      date: "06 Jun, 2024 19:10:02",
      status: "Received",
    },
    {
      id: "#ORD191016457",
      price: "₹748.00",
      date: "06 Jun, 2024 19:09:39",
      status: "Received",
    },
    {
      id: "#ORD584236541",
      price: "₹760.00",
      date: "06 Jun, 2024 19:08:05",
      status: "Received",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row lg:p-12 min-h-screen">
      <Sidebar />
      <div className="p-4 lg:p-10 w-full">
        <h2 className="text-xl lg:text-2xl font-bold mb-4">Orders</h2>

        <div className="">
          <table className="w-[100%] border border-gray-200 divide-y divide-gray-200 overflow-x-scroll">
            <thead>
              <tr>
                <th className="px-4 py-2 lg:px-6 lg:py-3 text-left text-sm lg:text-lg font-bold text-gray-700">
                  Order ID
                </th>
                <th className="px-4 py-2 lg:px-6 lg:py-3 text-left text-sm lg:text-lg font-bold text-gray-700">
                  Price
                </th>
                <th className="px-4 py-2 lg:px-6 lg:py-3 text-left text-sm lg:text-lg font-bold text-gray-700">
                  Date & Time
                </th>
                <th className="px-4 py-2 lg:px-6 lg:py-3 text-left text-sm lg:text-lg font-bold text-gray-700">
                  Status
                </th>
                <th className="px-4 py-2 lg:px-6 lg:py-3 text-left text-sm lg:text-lg font-bold text-gray-700">
                  View Order
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {orders.map((order, index) => (
                <tr key={index}>
                  <td className="px-4 py-2 lg:px-6 lg:py-4 text-sm text-gray-900">
                    {order.id}
                  </td>
                  <td className="px-4 py-2 lg:px-6 lg:py-4 text-sm text-gray-900">
                    {order.price}
                  </td>
                  <td className="px-4 py-2 lg:px-6 lg:py-4 text-sm text-gray-900">
                    {order.date}
                  </td>
                  <td className="px-4 py-2 lg:px-6 lg:py-4 text-sm">
                    <span className="px-3 py-1 text-sm font-medium text-white bg-orange-300 rounded-sm">
                      {order.status}
                    </span>
                  </td>
                  <td className="px-4 py-2 lg:px-6 lg:py-4 text-sm">
                    <button variant="ghost" className="p-2">
                      <FaEye className="w-5 h-5 text-gray-600" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;

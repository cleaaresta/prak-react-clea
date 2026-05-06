import { useState } from "react";
import PageHeader from "../components/PageHeader";
import ordersData from "../data/orders.json";

export default function Orders() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [orders, setOrders] = useState(ordersData);

  const handleAddOrder = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newOrder = {
      id: `ORD-${(orders.length + 1).toString().padStart(3, "0")}`,
      customerName: formData.get("customerName"),
      status: formData.get("status"),
      totalPrice: `Rp ${formData.get("totalPrice")}`,
      orderDate: formData.get("orderDate"),
    };
    setOrders([newOrder, ...orders]);
    setIsModalOpen(false);
  };

  return (
    <div className="p-6">
      <PageHeader title="Orders" breadcrumb={["Dashboard", "Orders"]}>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition"
        >
          Add Orders
        </button>
      </PageHeader>

      <div className="mt-6 bg-white rounded-lg shadow overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b">
              <th className="p-4 font-semibold text-gray-600">Order ID</th>
              <th className="p-4 font-semibold text-gray-600">Customer Name</th>
              <th className="p-4 font-semibold text-gray-600">Status</th>
              <th className="p-4 font-semibold text-gray-600">Total Price</th>
              <th className="p-4 font-semibold text-gray-600">Order Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b hover:bg-gray-50">
                <td className="p-4 text-gray-700">{order.id}</td>
                <td className="p-4 text-gray-700">{order.customerName}</td>
                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      order.status === "Completed"
                        ? "bg-green-100 text-green-700"
                        : order.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="p-4 text-gray-700">{order.totalPrice}</td>
                <td className="p-4 text-gray-700">{order.orderDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-md p-6">
            <h2 className="text-xl font-bold mb-4">Add New Order</h2>
            <form onSubmit={handleAddOrder}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Customer Name
                  </label>
                  <input
                    name="customerName"
                    type="text"
                    required
                    className="w-full border rounded p-2 outline-none focus:border-green-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Status
                  </label>
                  <select
                    name="status"
                    className="w-full border rounded p-2 outline-none focus:border-green-500"
                  >
                    <option value="Pending">Pending</option>
                    <option value="Completed">Completed</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Total Price (Rp)
                  </label>
                  <input
                    name="totalPrice"
                    type="text"
                    required
                    className="w-full border rounded p-2 outline-none focus:border-green-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Order Date
                  </label>
                  <input
                    name="orderDate"
                    type="date"
                    required
                    className="w-full border rounded p-2 outline-none focus:border-green-500"
                  />
                </div>
              </div>
              <div className="mt-6 flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

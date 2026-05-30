import { useState } from "react";
import PageHeader from "../components/PageHeader";
import ordersData from "../data/orders.json";
import Button from "../components/basic/Button";
import Input from "../components/form/Input";
import Select from "../components/form/Select";
import Modal from "../components/feedback/Modal";
import Table from "../components/data/Table";

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

      <div className="mt-6">
        <Table className="rounded-lg shadow overflow-x-auto">
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
        </Table>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Add New Order"
      >
        <form onSubmit={handleAddOrder}>
          <div className="space-y-4">
            <Input
              label="Customer Name"
              name="customerName"
              type="text"
              required
            />
            <Select label="Status" name="status">
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
              <option value="Cancelled">Cancelled</option>
            </Select>
            <Input
              label="Total Price (Rp)"
              name="totalPrice"
              type="text"
              required
            />
            <Input label="Order Date" name="orderDate" type="date" required />
          </div>
          <div className="mt-6 flex justify-end gap-3">
            <Button
              variant="secondary"
              type="button"
              onClick={() => setIsModalOpen(false)}
            >
              Cancel
            </Button>
            <Button type="submit">Save</Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

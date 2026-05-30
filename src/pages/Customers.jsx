import { useState } from "react";
import PageHeader from "../components/PageHeader";
import customersData from "../data/customers.json";
import Button from "../components/basic/Button";
import Input from "../components/form/Input";
import Select from "../components/form/Select";
import Modal from "../components/feedback/Modal";
import Table from "../components/data/Table";

export default function Customers() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [customers, setCustomers] = useState(customersData);

  const handleAddCustomer = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newCustomer = {
      id: `CUST-${(customers.length + 1).toString().padStart(3, "0")}`,
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      loyalty: formData.get("loyalty"),
    };
    setCustomers([newCustomer, ...customers]);
    setIsModalOpen(false);
  };

  return (
    <div className="p-6">
      <PageHeader title="Customers" breadcrumb={["Dashboard", "Customers"]}>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition"
        >
          Add Customer
        </button>
      </PageHeader>

      <div className="mt-6">
        <Table className="rounded-lg shadow overflow-x-auto">
          <thead>
            <tr className="bg-gray-50 border-b">
              <th className="p-4 font-semibold text-gray-600">Customer ID</th>
              <th className="p-4 font-semibold text-gray-600">Customer Name</th>
              <th className="p-4 font-semibold text-gray-600">Email</th>
              <th className="p-4 font-semibold text-gray-600">Phone</th>
              <th className="p-4 font-semibold text-gray-600">Loyalty</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id} className="border-b hover:bg-gray-50">
                <td className="p-4 text-gray-700">{customer.id}</td>
                <td className="p-4 text-gray-700">{customer.name}</td>
                <td className="p-4 text-gray-700">{customer.email}</td>
                <td className="p-4 text-gray-700">{customer.phone}</td>
                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      customer.loyalty === "Gold"
                        ? "bg-yellow-100 text-yellow-700"
                        : customer.loyalty === "Silver"
                          ? "bg-gray-200 text-gray-700"
                          : "bg-orange-100 text-orange-700"
                    }`}
                  >
                    {customer.loyalty}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Add New Customer"
      >
        <form onSubmit={handleAddCustomer}>
          <div className="space-y-4">
            <Input label="Customer Name" name="name" type="text" required />
            <Input label="Email" name="email" type="email" required />
            <Input label="Phone" name="phone" type="text" required />
            <Select label="Loyalty" name="loyalty">
              <option value="Bronze">Bronze</option>
              <option value="Silver">Silver</option>
              <option value="Gold">Gold</option>
            </Select>
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

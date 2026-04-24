export default function Details({ search }) {
  const details = [
    { id: 1, name: "Order #001", status: "Delivered", date: "2023-10-01" },
    { id: 2, name: "Order #002", status: "Pending", date: "2023-10-02" },
    { id: 3, name: "Order #003", status: "Canceled", date: "2023-10-03" },
  ];

  const filteredDetails = details.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.status.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-1">Details</h1>
      <p className="text-gray-400 mb-6">Dashboard / Details</p>

      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-4">Order Details</h2>
        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th className="py-2">ID</th>
              <th className="py-2">Name</th>
              <th className="py-2">Status</th>
              <th className="py-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredDetails.map((item) => (
              <tr key={item.id} className="border-b">
                <td className="py-2">{item.id}</td>
                <td className="py-2">{item.name}</td>
                <td className="py-2">{item.status}</td>
                <td className="py-2">{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

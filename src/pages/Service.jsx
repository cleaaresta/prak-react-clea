export default function Services({ search }) {
  const services = [
    {
      id: 1,
      name: "Dine In",
      description: "Eat in the restaurant",
      price: "Free",
    },
    { id: 2, name: "Take Away", description: "Take food to go", price: "$5" },
    {
      id: 3,
      name: "Delivery",
      description: "Home delivery service",
      price: "$10",
    },
  ];

  const filteredServices = services.filter(
    (service) =>
      service.name.toLowerCase().includes(search.toLowerCase()) ||
      service.description.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-1">Services</h1>
      <p className="text-gray-400 mb-6">Dashboard / Services</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredServices.map((service) => (
          <div
            key={service.id}
            className="bg-white p-4 rounded shadow hover:scale-105 transition"
          >
            <h3 className="text-lg font-semibold mb-2">{service.name}</h3>
            <p className="text-gray-600 mb-2">{service.description}</p>
            <p className="text-green-500 font-bold">{service.price}</p>
            <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

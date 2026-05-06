import { useState } from "react";

export default function Dashboard({ search }) {
  const [selected, setSelected] = useState(null);

  const cards = [
    {
      id: 1,
      icon: "🛒",
      number: 75,
      label: "Total Orders",
      color: "bg-green-500",
    },
    {
      id: 2,
      icon: "🚚",
      number: 175,
      label: "Total Delivered",
      color: "bg-blue-500",
    },
    {
      id: 3,
      icon: "⛔",
      number: 40,
      label: "Total Canceled",
      color: "bg-red-500",
    },
    {
      id: 4,
      icon: "💰",
      number: "Rp.128",
      label: "Total Revenue",
      color: "bg-yellow-500",
    },
    {
      id: 5,
      icon: "👥",
      number: 120,
      label: "Total Users",
      color: "bg-purple-500",
    },
  ];

  const filteredCards = cards.filter((card) =>
    card.label.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="p-6">
      {/* Title */}
      <h1 className="text-2xl font-semibold mb-1">Dashboard</h1>
      <p className="text-gray-400 mb-6">Dashboard / Order List</p>

      {/* Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {filteredCards.map((card) => (
          <div
            key={card.id}
            onClick={() => setSelected(card.label)}
            className="bg-white p-4 rounded shadow flex items-center gap-4 cursor-pointer hover:scale-105 transition"
          >
            <div className={`${card.color} text-white p-3 rounded-full`}>
              {card.icon}
            </div>
            <div>
              <h2 className="text-xl font-bold">{card.number}</h2>
              <p className="text-gray-400 text-sm">{card.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 🔥 MODAL SUPER */}
      {selected && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl w-96 text-center shadow-lg animate-fadeIn">
            <h2 className="text-xl font-bold mb-2">{selected}</h2>

            <p className="text-gray-500 mb-4">
              Ini adalah detail informasi untuk <b>{selected}</b>.
            </p>

            <button
              onClick={() => setSelected(null)}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

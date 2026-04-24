import { useState } from "react";

export default function Dashboard() {
    const [selected, setSelected] = useState(null);

    return (
        <div className="p-6">
            {/* Title */}
            <h1 className="text-2xl font-semibold mb-1">Dashboard</h1>
            <p className="text-gray-400 mb-6">
                Dashboard / Order List
            </p>

            {/* Cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">

                {/* Orders */}
                <div 
                    onClick={() => setSelected("Total Orders")}
                    className="bg-white p-4 rounded shadow flex items-center gap-4 cursor-pointer hover:scale-105 transition"
                >
                    <div className="bg-green-500 text-white p-3 rounded-full">🛒</div>
                    <div>
                        <h2 className="text-xl font-bold">75</h2>
                        <p className="text-gray-400 text-sm">Total Orders</p>
                    </div>
                </div>

                {/* Delivered */}
                <div 
                    onClick={() => setSelected("Total Delivered")}
                    className="bg-white p-4 rounded shadow flex items-center gap-4 cursor-pointer hover:scale-105 transition"
                >
                    <div className="bg-blue-500 text-white p-3 rounded-full">🚚</div>
                    <div>
                        <h2 className="text-xl font-bold">175</h2>
                        <p className="text-gray-400 text-sm">Total Delivered</p>
                    </div>
                </div>

                {/* Canceled */}
                <div 
                    onClick={() => setSelected("Total Canceled")}
                    className="bg-white p-4 rounded shadow flex items-center gap-4 cursor-pointer hover:scale-105 transition"
                >
                    <div className="bg-red-500 text-white p-3 rounded-full">⛔</div>
                    <div>
                        <h2 className="text-xl font-bold">40</h2>
                        <p className="text-gray-400 text-sm">Total Canceled</p>
                    </div>
                </div>

                {/* Revenue */}
                <div 
                    onClick={() => setSelected("Total Revenue")}
                    className="bg-white p-4 rounded shadow flex items-center gap-4 cursor-pointer hover:scale-105 transition"
                >
                    <div className="bg-yellow-500 text-white p-3 rounded-full">💰</div>
                    <div>
                        <h2 className="text-xl font-bold">Rp.128</h2>
                        <p className="text-gray-400 text-sm">Total Revenue</p>
                    </div>
                </div>

                {/* Users */}
                <div 
                    onClick={() => setSelected("Total Users")}
                    className="bg-white p-4 rounded shadow flex items-center gap-4 cursor-pointer hover:scale-105 transition"
                >
                    <div className="bg-purple-500 text-white p-3 rounded-full">👥</div>
                    <div>
                        <h2 className="text-xl font-bold">120</h2>
                        <p className="text-gray-400 text-sm">Total Users</p>
                    </div>
                </div>

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
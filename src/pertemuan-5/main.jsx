import { createRoot } from "react-dom/client";
import { useState } from "react";
import "./assets/tailwind.css";

import Sidebar from "./layouts/Sidebar";
import Header from "./layouts/Header";
import Dashboard from "./pages/Dashboard";
import Details from "./pages/Details";
import Service from "./pages/Service";

export default function App() {
  const [active, setActive] = useState("Dashboard");
  const [search, setSearch] = useState("");

  const renderPage = () => {
    switch (active) {
      case "Dashboard":
        return <Dashboard search={search} />;
      case "Details":
        return <Details search={search} />;
      case "Services":
        return <Service search={search} />;
      default:
        return <Dashboard search={search} />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar active={active} setActive={setActive} />

      <div className="flex-1 flex flex-col">
        <Header search={search} setSearch={setSearch} />
        {renderPage()}
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);

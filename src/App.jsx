import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Sidebar from "./layouts/Sidebar";
import Header from "./layouts/Header";
import Dashboard from "./pages/Dashboard";
import Details from "./pages/Details";
import Service from "./pages/Service";
import NotFound from "./pages/NotFound";
import Customers from "./pages/Customers";
import Orders from "./pages/Orders";
import ErrorPage from "./pages/ErrorPage";

export default function App() {
  const [search, setSearch] = useState("");

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header search={search} setSearch={setSearch} />
        <Routes>
          <Route path="/" element={<Dashboard search={search} />} />
          <Route path="/details" element={<Details search={search} />} />
          <Route path="/services" element={<Service search={search} />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/orders" element={<Orders />} />
          <Route
            path="/error-400"
            element={
              <ErrorPage
                errorCode="400"
                errorDescription="Permintaan tidak valid. Harap periksa kembali parameter yang Anda kirim."
                errorImage="https://http.cat/400"
              />
            }
          />
          <Route
            path="/error-401"
            element={
              <ErrorPage
                errorCode="401"
                errorDescription="Anda tidak terautentikasi. Silakan login terlebih dahulu untuk mengakses halaman ini."
                errorImage="https://http.cat/401"
              />
            }
          />
          <Route
            path="/error-403"
            element={
              <ErrorPage
                errorCode="403"
                errorDescription="Anda tidak memiliki izin untuk mengakses halaman ini. Akses ditolak."
                errorImage="https://http.cat/403"
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

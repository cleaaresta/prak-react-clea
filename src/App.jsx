import React, { Suspense, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Spinner from "./components/feedback/Spinner";

// import Dashboard from "./pages/Dashboard";
//import Details from "./pages/Details";
//import Service from "./pages/Service";
//import NotFound from "./pages/NotFound";
//import Customers from "./pages/Customers";
//import Orders from "./pages/Orders";
//import ErrorPage from "./pages/ErrorPage";
//import MainLayout from "./layouts/MainLayout";
//import AuthLayout from "./layouts/AuthLayout";
//import Login from "./pages/auth/Login";
//import Register from "./pages/auth/Register";
//import Forgot from "./pages/auth/Forgot";

const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Orders = React.lazy(() => import("./pages/Orders"));
const Customers = React.lazy(() => import("./pages/Customers"));
const Details = React.lazy(() => import("./pages/Details"));
const ErrorPage = React.lazy(() => import("./pages/ErrorPage"));
const Service = React.lazy(() => import("./pages/Service"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const Login = React.lazy(() => import("./pages/auth/Login"));
const Forgot = React.lazy(() => import("./pages/auth/Forgot"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const Products = React.lazy(() => import("./pages/Products"));
const MainLayout = React.lazy(() => import("./layouts/MainLayout"));
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));
const ProductDetail = React.lazy(() => import("./pages/ProductDetail"));

export default function App() {
  const [search, setSearch] = useState("");

  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        //main Layot//
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard search={search} />} />
          <Route path="/details" element={<Details search={search} />} />
          <Route path="/services" element={<Service search={search} />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
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
        </Route>
        //AuthLayout//
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

import { useState } from "react";
import PageHeader from "../components/PageHeader";
import productsData from "../data/products.json";
import { Link } from "react-router-dom";

export default function Products() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [products, setProducts] = useState(productsData);

  const handleAddProduct = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newProduct = {
      id: `P${(products.length + 1).toString().padStart(3, "0")}`,
      title: formData.get("title"),
      code: formData.get("code"),
      category: formData.get("category"),
      brand: formData.get("brand"),
      price: Number(formData.get("price")) || 0,
      stock: Number(formData.get("stock")) || 0,
    };

    setProducts([newProduct, ...products]);
    setIsModalOpen(false);
    e.target.reset();
  };

  return (
    <div className="p-6">
      <PageHeader title="Produk" breadcrumb={["Dashboard", "Produk"]}>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition"
        >
          Add Produk
        </button>
      </PageHeader>

      <div className="mt-6 bg-white rounded-lg shadow overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b">
              <th className="p-4 font-semibold text-gray-600">ID</th>
              <th className="p-4 font-semibold text-gray-600">Nama Produk</th>
              <th className="p-4 font-semibold text-gray-600">Kode</th>
              <th className="p-4 font-semibold text-gray-600">Kategori</th>
              <th className="p-4 font-semibold text-gray-600">Brand</th>
              <th className="p-4 font-semibold text-gray-600">Harga</th>
              <th className="p-4 font-semibold text-gray-600">Stok</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-b hover:bg-gray-50">
                <td className="p-4 text-gray-700">{product.id}</td>
                <td className="p-4 text-gray-700">
                  <Link
                    to={`/products/${product.id}`}
                    className="text-emerald-400 hover:text-emerald-500"
                  >
                    {product.title}
                  </Link>
                </td>
                <td className="p-4 text-gray-700">{product.code}</td>
                <td className="p-4 text-gray-700">{product.category}</td>
                <td className="p-4 text-gray-700">{product.brand}</td>
                <td className="p-4 text-gray-700">
                  {typeof product.price === "number"
                    ? `Rp ${product.price.toLocaleString("id-ID")}`
                    : product.price}
                </td>
                <td className="p-4 text-gray-700">{product.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-lg p-6">
            <h2 className="text-xl font-bold mb-4">Add New Product</h2>
            <form onSubmit={handleAddProduct}>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nama Produk
                  </label>
                  <input
                    name="tittle"
                    type="text"
                    required
                    className="w-full border rounded p-2 outline-none focus:border-green-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Kode Produk
                  </label>
                  <input
                    name="code"
                    type="text"
                    required
                    className="w-full border rounded p-2 outline-none focus:border-green-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Kategori
                  </label>
                  <input
                    name="category"
                    type="text"
                    required
                    className="w-full border rounded p-2 outline-none focus:border-green-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Brand
                  </label>
                  <input
                    name="brand"
                    type="text"
                    required
                    className="w-full border rounded p-2 outline-none focus:border-green-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Harga (Rp)
                  </label>
                  <input
                    name="price"
                    type="number"
                    min="0"
                    required
                    className="w-full border rounded p-2 outline-none focus:border-green-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Stok
                  </label>
                  <input
                    name="stock"
                    type="number"
                    min="0"
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

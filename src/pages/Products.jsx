import { useState } from "react";
import PageHeader from "../components/PageHeader";
import productsData from "../data/products.json";
import { Link } from "react-router-dom";
import Button from "../components/basic/Button";
import Input from "../components/form/Input";
import Modal from "../components/feedback/Modal";
import Table from "../components/data/Table";

export default function Products() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [products, setProducts] = useState(productsData);

  const handleAddProduct = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newProduct = {
      id: `P${(products.length + 1).toString().padStart(3, "0")}`,
      tittle: formData.get("tittle"),
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

      <div className="mt-6">
        <Table className="rounded-lg shadow overflow-x-auto">
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
                    {product.tittle}
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
        </Table>
      </div>

      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Add New Product"
        >
          <form onSubmit={handleAddProduct}>
            <div className="grid gap-4 md:grid-cols-2">
              <Input label="Nama Produk" name="tittle" type="text" required />
              <Input label="Kode Produk" name="code" type="text" required />
              <Input label="Kategori" name="category" type="text" required />
              <Input label="Brand" name="brand" type="text" required />
              <Input
                label="Harga (Rp)"
                name="price"
                type="number"
                min="0"
                required
              />
              <Input label="Stok" name="stock" type="number" min="0" required />
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
      )}
    </div>
  );
}

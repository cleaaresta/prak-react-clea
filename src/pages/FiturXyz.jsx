import PageHeader from "../components/PageHeader";

export default function FiturXyz() {
  return (
    <div className="p-6">
      <PageHeader title="Fitur Xyz" breadcrumb={["Dashboard", "Fitur Xyz"]} />

      <div className="mt-6 rounded-xl bg-white p-6 shadow-sm">
        <p className="text-gray-600">Ini Halaman Fitur Xyz</p>
      </div>
    </div>
  );
}

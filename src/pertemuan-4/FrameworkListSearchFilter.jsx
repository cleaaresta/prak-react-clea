import { useState } from "react";

import frameworkData from "./framework.json";

export default function FrameworkListSearchFilter() {
  /** Deklrasai state **/
  //const [searchTerm, setSearchTerm] = useState("");
  //const [selectedTag, setSelectedTag] = useState("");

  /*Inisialisasi DataForm*/
  const [dataForm, setDataForm] = useState({
    searchTerm: "",
    selectedTag: "",
    /*Tambah state lain beserta default value*/
  });

  /*Inisialisasi Handle perubahan nilai input form*/
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  /** Deklrasai Logic Search & Filter **/
  const _searchTerm = dataForm.searchTerm.toLowerCase();
  const filteredFrameworks = frameworkData.filter((framework) => {
    const matchesSearch =
      framework.name.toLowerCase().includes(_searchTerm) ||
      framework.description.toLowerCase().includes(_searchTerm);

    const matchesTag = dataForm.selectedTag
      ? framework.tags.includes(dataForm.selectedTag)
      : true;

    return matchesSearch && matchesTag;
  });

  /** Deklarasi pengambilan unique tags di frameworkData **/
  const allTags = [
    ...new Set(frameworkData.flatMap((framework) => framework.tags)),
  ];

  return (
    <div className="p-10 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Framework Explorer
          </h1>
          <p className="mt-3 text-slate-600">
            Daftar teknologi modern untuk pengembangan aplikasi masa kini.
          </p>
        </div>

        <input
          type="text"
          name="searchTerm"
          placeholder="Search framework..."
          className="w-full p-2 border border-gray-300 rounded mb-4"
          onChange={handleChange}
        />

        <select
          name="selectedTag"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          onChange={handleChange}
        >
          <option value="">All Tags</option>
          {allTags.map((tag, index) => (
            <option key={index} value={tag}>
              {tag}
            </option>
          ))}
        </select>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFrameworks.map((item, index) => (
            <div
              key={item.id}
              className="group flex flex-col bg-white border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Badge Tahun */}
              <div className="flex justify-between items-start mb-4">
                <span className="bg-indigo-50 text-indigo-700 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border border-indigo-100">
                  EST. {item.details.releaseYear}
                </span>
              </div>

              {/* Title & Description */}
              <h2 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-indigo-600 transition-colors">
                {item.name}
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-grow">
                {item.description}
              </p>

              {/* Developer Info */}
              <div className="border-t border-slate-100 pt-4 mt-auto">
                <p className="text-xs text-slate-500 mb-3">
                  Developed by:{" "}
                  <span className="font-medium text-slate-700">
                    {item.details.developer}
                  </span>
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-slate-100 text-slate-600 px-2 py-1 text-[11px] font-medium rounded-lg"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Action Button/Link */}
                <a
                  href={item.details.officialWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-semibold text-indigo-600 hover:text-indigo-700"
                >
                  Visit Official Website
                  <svg
                    className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="arrow-narrow-right"
                    />
                    <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { Search as SearchIcon } from "lucide-react";

export default function Search() {
  const [query, setQuery] = useState("");

  const hotSearches = [
    "NSFW Discord servers",
    "Track Instagram location",
    "YN Meaning",
    "AI Parental Control Apps",
  ];

  const handleHotSearch = (item) => {
    setQuery(item);
  };

  return (
    <section className="w-full overflow-hidden px-4 sm:px-6 lg:px-0">
      <div className="w-full flex justify-center py-10 bg-gray-100">
        <div className="w-[95%] max-w-6xl rounded-[40px] bg-gradient-to-r from-purple-200 via-blue-200 to-teal-200 py-20 px-6 text-center">

          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-semibold text-indigo-500 mb-10">
            Search Everything You Need
          </h1>

          {/* Search Bar */}
          <div className="flex justify-center">
            <div className="flex items-center w-full max-w-3xl bg-white rounded-full px-6 py-4 shadow-sm">
              <SearchIcon className="text-gray-400 mr-3" size={22} />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search"
                className="w-full outline-none text-gray-600 text-lg"
              />
            </div>
          </div>

          {/* Hot Searches */}
          <div className="mt-8 flex flex-wrap justify-center items-center gap-3">
            <span className="text-gray-700 text-lg">Hot Searches:</span>

            {hotSearches.map((item, index) => (
              <button
                key={index}
                onClick={() => handleHotSearch(item)}
                className="px-4 py-2 rounded-full bg-white/60 text-indigo-500 text-sm font-medium hover:bg-white transition cursor-pointer"
              >
                {item}
              </button>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
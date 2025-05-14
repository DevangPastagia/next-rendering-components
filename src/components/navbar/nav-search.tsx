"use client";
import { useState } from "react";

export default function NavSearch() {
  const [search, setSearch] = useState("");

  return (
    <div className="flex items-center">
      <input
        type="text"
        placeholder="Search..."
        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            // Handle search action
            console.log("Searching for:", search);
            setSearch(""); // Clear the input after search
          }
        }}
      />
      <button className="ml-2 bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600">
        Search
      </button>
    </div>
  );
}

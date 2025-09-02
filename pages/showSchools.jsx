"use client";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";

export default function ShowSchools() {
  const [schools, setSchools] = useState([]);
  const [query, setQuery] = useState(""); // 🔍 Search state

  useEffect(() => {
    const fetchSchools = async () => {
      try {
        const res = await fetch("/api/getSchools");
        const data = await res.json();
        setSchools(data);
      } catch (error) {
        console.error("Error fetching schools:", error);
      }
    };

    fetchSchools();
  }, []);

  
  const filteredSchools = schools.filter(
    (school) =>
      school.name.toLowerCase().includes(query.toLowerCase()) ||
      school.city.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600 p-6 sm:p-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-6 text-center text-white drop-shadow-lg">
           Schools Directory
        </h1>

        
        <div className="flex justify-center mb-8">
          <input
            type="text"
            placeholder="Search by name or city..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full sm:w-96 px-4 py-2 rounded-lg border border-white/30 bg-white/20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-300"
          />
        </div>

        {filteredSchools.length === 0 ? (
          <p className="text-center text-gray-200 text-base sm:text-lg">
            No schools found.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredSchools.map((school) => (
              <div
                key={school.id}
                className="rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl transform hover:scale-105 transition duration-300 bg-white/10 backdrop-blur-xl border border-white/20"
              >
                <img
                  src={`/schoolImages/${school.image}`}
                  alt={school.name}
                  className="h-40 sm:h-48 w-full object-cover"
                />
                <div className="p-4 sm:p-6 text-white space-y-1 sm:space-y-2">
                  <h2 className="text-lg sm:text-xl font-bold text-yellow-300">
                    {school.name}
                  </h2>
                  <p className="text-gray-200 text-sm sm:text-base">
                    {school.address}
                  </p>
                  <p className="text-gray-300 text-sm sm:text-base">
                    {school.city}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

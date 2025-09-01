"use client";
import { useEffect, useState } from "react";

export default function ShowSchools() {
  const [schools, setSchools] = useState([]);

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600 p-10">
      <h1 className="text-5xl font-extrabold mb-12 text-center text-white drop-shadow-lg">
        📚 Schools Directory
      </h1>

      {schools.length === 0 ? (
        <p className="text-center text-gray-200 text-xl">
          No schools found. Please add some.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {schools.map((school) => (
            <div
              key={school.id}
              className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition duration-300 bg-white/10 backdrop-blur-xl border border-white/20"
            >
              <div className="relative">
                <img
                  src={`/schoolImages/${school.image}`}
                  alt={school.name}
                  className="h-48 w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <h2 className="absolute bottom-4 left-4 text-2xl font-bold text-yellow-300 drop-shadow-lg">
                  {school.name}
                </h2>
              </div>

              <div className="p-6 text-white space-y-2">
                <p className="text-gray-200 text-sm flex items-center gap-2">
                  📍 <span>{school.address}, {school.city}, {school.state}</span>
                </p>
                <p className="text-gray-300 text-sm flex items-center gap-2">
                  📞 <span>{school.contact}</span>
                </p>
                <p className="text-gray-300 text-sm flex items-center gap-2">
                  ✉️ <span>{school.email_id}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

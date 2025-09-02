import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-6">
      <h1 className="text-4xl font-extrabold mb-10 drop-shadow-lg text-center">
        🏫 School Directory Portal
      </h1>

      <div className="flex flex-col sm:flex-row gap-6">
        <Link
          href="/addSchool"
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-4 rounded-xl shadow-lg transform hover:scale-105 transition"
        >
          ➕ Add School
        </Link>

        <Link
          href="/showSchools"
          className="bg-green-400 hover:bg-green-500 text-black font-bold px-8 py-4 rounded-xl shadow-lg transform hover:scale-105 transition"
        >
          📋 Show Schools
        </Link>
      </div>
    </div>
  );
}

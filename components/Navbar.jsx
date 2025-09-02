"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo / Title */}
          <Link href="/" className="text-2xl font-extrabold tracking-wide">
             SchoolHub
          </Link>

          {/* Navigation Links */}
          <div className="flex space-x-6">
            <Link
              href="/addSchool"
              className={`px-3 py-2 rounded-md text-sm font-medium transition ${
                pathname === "/addSchool"
                  ? "bg-yellow-400 text-black"
                  : "hover:bg-yellow-300 hover:text-black"
              }`}
            >
              ➕ Add School
            </Link>

            <Link
              href="/showSchools"
              className={`px-3 py-2 rounded-md text-sm font-medium transition ${
                pathname === "/showSchools"
                  ? "bg-green-400 text-black"
                  : "hover:bg-green-300 hover:text-black"
              }`}
            >
              📋 Show Schools
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

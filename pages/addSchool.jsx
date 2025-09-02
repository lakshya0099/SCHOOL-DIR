"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Navbar from "@/components/Navbar";

export default function AddSchool() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [message, setMessage] = useState("");

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();

      formData.append("name", data.name);
      formData.append("address", data.address);
      formData.append("city", data.city);
      formData.append("state", data.state);
      formData.append("contact", data.contact);
      formData.append("email_id", data.email_id);

      if (data.image && data.image[0]) {
        formData.append("image", data.image[0]);
      }

      const res = await fetch("/api/addSchool", {
        method: "POST",
        body: formData,
      });

      const result = await res.json();
      if (result.success) {
        setMessage("✅ School added successfully!");
        reset();
      } else {
        setMessage("❌ " + (result.error || "Something went wrong"));
      }
    } catch (err) {
      setMessage("❌ Error: " + err.message);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-6">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 w-full max-w-lg text-white">
          <h1 className="text-3xl font-extrabold mb-6 text-center drop-shadow-lg">
            Add New School
          </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            {...register("name", { required: true })}
            placeholder="School Name"
            className="w-full p-3 rounded-lg border border-gray-300 bg-white/20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          {errors.name && <p className="text-red-300">School name is required</p>}

          <input
            {...register("address", { required: true })}
            placeholder="Address"
            className="w-full p-3 rounded-lg border border-gray-300 bg-white/20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          {errors.address && <p className="text-red-300">Address is required</p>}

          <input
            {...register("city", { required: true })}
            placeholder="City"
            className="w-full p-3 rounded-lg border border-gray-300 bg-white/20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          {errors.city && <p className="text-red-300">City is required</p>}

          <input
            {...register("state")}
            placeholder="State"
            className="w-full p-3 rounded-lg border border-gray-300 bg-white/20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <input
            {...register("contact", {
              required: true,
              pattern: /^[0-9]{10}$/,
            })}
            placeholder="Contact Number"
            className="w-full p-3 rounded-lg border border-gray-300 bg-white/20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          {errors.contact && (
            <p className="text-red-300">Enter a valid 10-digit number</p>
          )}

          <input
            {...register("email_id", {
              required: true,
              pattern: /^\S+@\S+$/i,
            })}
            placeholder="Email"
            className="w-full p-3 rounded-lg border border-gray-300 bg-white/20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          {errors.email_id && (
            <p className="text-red-300">Enter a valid email</p>
          )}

          <input
            type="file"
            {...register("image", { required: true })}
            className="w-full p-3 rounded-lg border border-gray-300 bg-white/20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          {errors.image && <p className="text-red-300">Image is required</p>}

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-black font-bold py-3 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
          >
            Add School
          </button>
        </form>

        {message && (
          <p className="mt-6 text-center font-semibold text-lg">{message}</p>
        )}
      </div>
    </div>
    </>
  );
}

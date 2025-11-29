import React, { useEffect, useState } from "react";
import { getAllBookingsAPI } from "../services/allAPI";

function Admin() {
  const [search, setSearch] = useState("");
  const [allBookings, setAllBookings] = useState([]);

  function formatDate(dateString) {
    const d = new Date(dateString);
    return d.toLocaleDateString("en-GB"); // output: DD/MM/YYYY
  }

  const getAllBookings = async () => {
    try {
      const result = await getAllBookingsAPI();
      console.log(result);

      if (result.status === 200) {
        setAllBookings(Array.isArray(result.data.bookings) ? result.data.bookings.reverse() : []);
      }
    } catch (err) {
      console.log(err);
    }
  };
  console.log(allBookings);

  useEffect(() => {
    getAllBookings();
  }, []);

  const filtered = allBookings.filter((b) =>
    b.name?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-20 w-full">
      <h2 className="text-2xl font-bold mb-4 text-center">Admin - Resort Bookings</h2>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by name..."
        className="mb-4 w-full md:w-1/3 px-4 py-2 border rounded-lg focus:ring focus:ring-emerald-300 outline-none"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* TABLE */}
      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="min-w-full bg-white">
          <thead className="bg-emerald-600 text-white">
            <tr>
              <th className="py-3 px-5 text-left">ID</th>
              <th className="py-3 px-5 text-left">Name</th>
              <th className="py-3 px-5 text-left">Mobile</th>
              <th className="py-3 px-5 text-left">Email</th>
              <th className="py-3 px-5 text-left">Check-In</th>
              <th className="py-3 px-5 text-left">Check-Out</th>
              <th className="py-3 px-5 text-left">Guests</th>
              <th className="py-3 px-5 text-left">Status</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((booking, index) => (
              <tr
                key={booking._id}
                className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"} border-b`}
              >
                <td className="py-3 px-5">{index + 1}</td>
                <td className="py-3 px-5">{booking.name}</td>
                <td className="py-3 px-5">{booking.mobile}</td>
                <td className="py-3 px-5">{booking.email}</td>
                <td className="py-3 px-5">{formatDate(booking.arrival)}</td>
                <td className="py-3 px-5">{formatDate(booking.departure)}</td>
                <td className="py-3 px-5">{booking.guests}</td>

                {/* Fake Status (You can generate from backend later) */}
                <td className="py-3 px-5">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-700`}
                  >
                    Pending
                  </span>
                </td>
              </tr>
            ))}

            {filtered.length === 0 && (
              <tr>
                <td
                  colSpan="7"
                  className="text-center py-6 text-gray-500 font-medium"
                >
                  No bookings found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Admin;

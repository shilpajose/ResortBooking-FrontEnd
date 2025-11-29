import React, { useState } from "react";
import { motion } from "framer-motion";
import g4 from "../assets/g4.webp";
import { ToastContainer, toast } from "react-toastify";
import { bookResortAPI } from "../services/allAPI";

function Bookings() {
  const today = new Date().toISOString().split("T")[0];

  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    country: "",
    state: "",
    guests: "",
    address: "",
    arrival: "",
    departure: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    let sanitized = value;

    // Trim spaces
    sanitized = sanitized.replace(/\s+/g, " ").trimStart();

    // Mobile only digits
    if (name === "mobile") {
      sanitized = sanitized.replace(/[^0-9]/g, "");
    }

    setForm({ ...form, [name]: sanitized });

    // Live validation for mobile
    if (name === "mobile") {
      if (!sanitized) setErrors(prev => ({ ...prev, mobile: "Mobile number is required." }));
      else if (sanitized.length > 10) setErrors(prev => ({ ...prev, mobile: "Mobile cannot exceed 10 digits." }));
      else if (sanitized.length < 10) setErrors(prev => ({ ...prev, mobile: "Mobile must be 10 digits." }));
      else setErrors(prev => ({ ...prev, mobile: "" }));
    } else {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    let newErrors = {};

    // Name
    if (!form.name.trim()) newErrors.name = "Name is required.";
    else if (form.name.trim().length < 3) newErrors.name = "Name must be at least 3 characters.";
    else if (!/^[A-Za-z ]+$/.test(form.name)) newErrors.name = "Name should contain only letters and spaces.";
    else if (form.name.length > 40) newErrors.name = "Name cannot exceed 40 characters.";

    // Email
    if (!form.email.trim()) newErrors.email = "Email is required.";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) newErrors.email = "Enter a valid email.";

    // Mobile
    if (!form.mobile) newErrors.mobile = "Mobile number is required.";
    else if (form.mobile.length > 10) newErrors.mobile = "Mobile cannot exceed 10 digits.";
    else if (form.mobile.length < 10) newErrors.mobile = "Mobile must be 10 digits.";

    // Country
    if (!form.country.trim()) newErrors.country = "Country is required.";

    // State
    if (!form.state.trim()) newErrors.state = "State is required.";

    // Guests
    if (!form.guests) newErrors.guests = "Number of guests is required.";
    else if (form.guests < 1) newErrors.guests = "At least 1 guest is required.";

    // Address
    if (!form.address.trim()) newErrors.address = "Address is required.";

    // Arrival
    if (!form.arrival) newErrors.arrival = "Select arrival date.";

    // Departure
    if (!form.departure) newErrors.departure = "Select departure date.";

    // Departure after arrival
    if (form.arrival && form.departure && form.departure < form.arrival) {
      newErrors.departure = "Departure must be after arrival.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const payload = {
      ...form,
      name: form.name.trim(),
      email: form.email.trim(),
      mobile: form.mobile.trim(),
      country: form.country.trim(),
      state: form.state.trim(),
      guests: Number(form.guests),
      address: form.address.trim(),
    };

    try {
      const result = await bookResortAPI(payload);
      if (result.status === 200 || result.status === 201) {
        toast.success("Booking Successful!");
        setForm({
          name: "",
          email: "",
          mobile: "",
          country: "",
          state: "",
          guests: "",
          address: "",
          arrival: "",
          departure: "",
        });
      }
    
    } catch (err) {
      toast.error(err?.response?.data?.message || "Booking failed. Try again.");
    }
  };

  
  return (
    <div className="w-full">
      {/* Banner */}
      <div className="relative w-full h-[50vh] overflow-hidden">
        <motion.img
          src={g4}
          className="w-full h-full object-cover"
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-white text-4xl md:text-5xl font-semibold"
          >
            Booking Form
          </motion.h1>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">Guest Information</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-8 rounded-xl shadow">

          {/* Name */}
          <div className="flex flex-col">
            <label className="mb-1 font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter full name"
              className={`border p-2 rounded-md ${errors.name ? "border-red-500" : ""}`}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter email address"
              className={`border p-2 rounded-md ${errors.email ? "border-red-500" : ""}`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Mobile */}
          <div className="flex flex-col">
            <label className="mb-1 font-medium">Mobile Number</label>
            <input
              type="text"
              name="mobile"
              value={form.mobile}
              onChange={handleChange}
              placeholder="Phone number"
              maxLength={10}
              className={`border p-2 rounded-md ${errors.mobile ? "border-red-500" : ""}`}
            />
            {errors.mobile && <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>}
          </div>

          {/* Country */}
          <div className="flex flex-col">
            <label className="mb-1 font-medium">Country</label>
            <input
              type="text"
              name="country"
              value={form.country}
              onChange={handleChange}
              placeholder="Enter country name"
              className={`border p-2 rounded-md ${errors.country ? "border-red-500" : ""}`}
            />
            {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country}</p>}
          </div>
          {/* State */}
          <div className="flex flex-col">
            <label className="mb-1 font-medium">State</label>
            <input
              type="text"
              name="state"
              value={form.state}
              onChange={handleChange}
              placeholder="Enter state name"
              className={`border p-2 rounded-md ${errors.state ? "border-red-500" : ""}`}
            />
            {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state}</p>}
          </div>

          {/* Guests */}
          <div className="flex flex-col">
            <label className="mb-1 font-medium">Number of Guests</label>
            <input
              type="number"
              name="guests"
              value={form.guests}
              onChange={handleChange}
              placeholder="Number of guests"
              className={`border p-2 rounded-md ${errors.guests ? "border-red-500" : ""}`}
              min={1}
            />
            {errors.guests && <p className="text-red-500 text-sm mt-1">{errors.guests}</p>}
          </div>

          {/* Address */}
          <div className="flex flex-col md:col-span-2">
            <label className="mb-1 font-medium">Address</label>
            <textarea
              name="address"
              rows="3"
              value={form.address}
              onChange={handleChange}
              placeholder="Enter your full address"
              className={`border p-2 rounded-md ${errors.address ? "border-red-500" : ""}`}
            ></textarea>
            {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
          </div>

          {/* Arrival */}
          <div className="flex flex-col">
            <label className="mb-1 font-medium">Date of Arrival</label>
            <input
              type="date"
              name="arrival"
              value={form.arrival}
              onChange={handleChange}
              min={today}
              className={`border p-2 rounded-md ${errors.arrival ? "border-red-500" : ""}`}
            />
            {errors.arrival && <p className="text-red-500 text-sm mt-1">{errors.arrival}</p>}
          </div>

          {/* Departure */}
          <div className="flex flex-col">
            <label className="mb-1 font-medium">Date of Departure</label>
            <input
              type="date"
              name="departure"
              value={form.departure}
              onChange={handleChange}
              min={form.arrival || today}
              className={`border p-2 rounded-md ${errors.departure ? "border-red-500" : ""}`}
            />
            {errors.departure && <p className="text-red-500 text-sm mt-1">{errors.departure}</p>}
          </div>

          {/* Submit */}
          <div className="md:col-span-2 flex justify-center mt-4">
            <button type="submit" className="px-6 py-2 bg-green-700 text-white rounded-md hover:bg-green-800">
              Submit
            </button>
          </div>

        </form>
      </div>
      <ToastContainer theme="colored" position="top-center" autoClose={3000} />
    </div>
  );
}

export default Bookings;

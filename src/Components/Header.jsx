import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [open, setOpen] = useState(false);

  // Smooth scroll for #links (Services, Gallery)
  const handleSmoothScroll = (e, target) => {
    e.preventDefault();
    const el = document.getElementById(target);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false); // close menu
  };

  return (
    <header className="w-full bg-white/90 backdrop-blur sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-emerald-400 to-sky-500 flex items-center justify-center text-white font-bold">
              GV
            </div>
            <div>
              <Link to="/" className="text-lg font-extrabold text-slate-800">
                Green Valley Munnar
              </Link>
              <div className="text-xs text-slate-500 -mt-0.5">
                Relax. Refresh. Reconnect.
              </div>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-sm text-slate-700 hover:text-slate-900">
              Home
            </Link>

            <a
              href="#services"
              onClick={(e) => handleSmoothScroll(e, "services")}
              className="text-sm text-slate-700 hover:text-slate-900"
            >
              Services
            </a>

            <a
              href="#gallery"
              onClick={(e) => handleSmoothScroll(e, "gallery")}
              className="text-sm text-slate-700 hover:text-slate-900"
            >
              Gallery
            </a>

            <Link
              to="/admin"
              className="text-sm text-red-700 hover:text-slate-900"
            >
              Admin
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <Link
              to="/booking"
              className="hidden sm:inline-flex items-center px-4 py-2 rounded-md bg-emerald-500 text-white text-sm font-medium hover:bg-emerald-600 transition"
            >
              Book Now
            </Link>

            {/* Mobile Toggle */}
            <button
              className="inline-flex md:hidden p-2 rounded-md text-slate-700 hover:bg-slate-100"
              onClick={() => setOpen((prev) => !prev)}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {open ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          open ? "max-h-96" : "max-h-0"
        } md:hidden overflow-hidden transition-all duration-300 ease-out border-t border-slate-100`}
      >
        <div className="px-4 pt-4 pb-6 space-y-3">

          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="block text-slate-700 py-2"
          >
            Home
          </Link>

          <a
            href="#services"
            onClick={(e) => handleSmoothScroll(e, "services")}
            className="block text-slate-700 py-2"
          >
            Services
          </a>

          <a
            href="#gallery"
            onClick={(e) => handleSmoothScroll(e, "gallery")}
            className="block text-slate-700 py-2"
          >
            Gallery
          </a>

          <Link
            to="/admin"
            onClick={() => setOpen(false)}
            className="block text-slate-700 py-2"
          >
            Admin
          </Link>

          <Link
            to="/booking"
            onClick={() => setOpen(false)}
            className="block text-center px-4 py-2 rounded-md bg-emerald-500 text-white font-medium"
          >
            Book Now
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;

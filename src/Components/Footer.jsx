import React from 'react'

function Footer() {
  return (
    <>
      <footer className="bg-gray-900 text-gray-300 pt-12 px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left">

          {/* Resort Info */}
          <div className="md:text-left">
            <h2 className="text-3xl font-bold text-white">Green Valley Munnar</h2>
            <p className="mt-3 text-gray-400">
              Relax. Refresh. Reconnect.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-5 text-white text-xl justify-center md:justify-start">
              <a href="#" className="hover:text-yellow-400"><i className="fab fa-facebook"></i></a>
              <a href="#" className="hover:text-yellow-400"><i className="fab fa-instagram"></i></a>
              <a href="#" className="hover:text-yellow-400"><i className="fab fa-twitter"></i></a>
              <a href="#" className="hover:text-yellow-400"><i className="fab fa-youtube"></i></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-yellow-400">Rooms</a></li>
              <li><a href="#" className="hover:text-yellow-400">Booking</a></li>
              <li><a href="#" className="hover:text-yellow-400">Gallery</a></li>
              <li><a href="#" className="hover:text-yellow-400">Blogs</a></li>
              <li><a href="#" className="hover:text-yellow-400">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info  */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Contact Info</h3>
            <p className="mb-2"><i className="fa-solid fa-phone"></i> +91 9876543210</p>
            <p className="mb-2"><i className="fa-solid fa-phone"></i> +91 9123456780</p>
            <p className="mb-2"><i className="fa-solid fa-envelope"></i> info@greenvalleymunnar.com</p>
            <p className="mb-2"><i className="fa-solid fa-location-dot"></i> Munnar, Kerala, India</p>
          </div>

          {/* About Us */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">About Us</h3>
            <p className="text-gray-400">
              Experience comfort, luxury, and nature in perfect harmony.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="text-center text-gray-400 mt-10 border-t border-gray-700 py-5">
          © 2025 Green Valley Munnar. All rights reserved.
        </div>
      </footer>

    </>
  )
}

export default Footer
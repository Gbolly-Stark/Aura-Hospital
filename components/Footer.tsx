import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div>
          <h3 className="text-xl font-bold text-cyan-400 mb-3">MediCare Hospital</h3>
          <p className="text-gray-400 text-sm">
            Providing compassionate, world-class healthcare with modern facilities and expert medical professionals available 24/7.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-cyan-400">Home</a></li>
            <li><a href="#" className="hover:text-cyan-400">About Us</a></li>
            <li><a href="#" className="hover:text-cyan-400">Services</a></li>
            <li><a href="#" className="hover:text-cyan-400">Doctors</a></li>
            <li><a href="#" className="hover:text-cyan-400">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Medical Services</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Emergency Care</li>
            <li>Cardiology</li>
            <li>Pediatrics</li>
            <li>Orthopedics</li>
            <li>Laboratory & X-Ray</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Emergency Contact</h4>
          <p className="text-sm text-gray-400 mb-2">123 Healthcare Boulevard, Suite 400</p>
          <p className="text-sm text-cyan-400 font-bold mb-2">Phone: +1 (800) 999-CARE</p>
          <p className="text-sm text-gray-400">Email: info@medicarehospital.com</p>
        </div>
      </div>

      <div className="border-t border-gray-800 pt-4 text-center text-xs text-gray-500">
        <p>&copy; {new Date().getFullYear()} MediCare Hospital. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
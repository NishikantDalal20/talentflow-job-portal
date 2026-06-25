import React from "react";

const Footer = () => {
  return (
    <footer className="border-t bg-white py-12 mt-10">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* BRAND */}
          <div>
            <h1 className="text-2xl font-bold text-[#6A38C2]">
              TalentFlow
            </h1>
            <p className="text-sm text-gray-600 mt-3">
              Find your dream job faster with thousands of verified listings and top companies.
            </p>
          </div>

          {/* LINKS */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Quick Links</h3>

            <div className="flex flex-col gap-2 text-sm">
              <a className="text-gray-600 hover:text-[#6A38C2]" href="/">Home</a>
              <a className="text-gray-600 hover:text-[#6A38C2]" href="/jobs">Jobs</a>
              <a className="text-gray-600 hover:text-[#6A38C2]" href="/login">Login</a>
              <a className="text-gray-600 hover:text-[#6A38C2]" href="/signup">Signup</a>
            </div>
          </div>

          {/* SOCIAL */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Connect</h3>

            <div className="flex gap-4">
              <a href="#" className="text-gray-500 hover:text-[#6A38C2] transition">
                Facebook
              </a>
              <a href="#" className="text-gray-500 hover:text-[#6A38C2] transition">
                Twitter
              </a>
              <a href="#" className="text-gray-500 hover:text-[#6A38C2] transition">
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2026 TalentFlow. All rights reserved.</p>

          <div className="flex gap-4 mt-3 md:mt-0">
            <a href="#" className="hover:text-[#6A38C2]">Privacy</a>
            <a href="#" className="hover:text-[#6A38C2]">Terms</a>
            <a href="#" className="hover:text-[#6A38C2]">Support</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
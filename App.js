import React from "react";
import { motion } from "framer-motion";

export default function AchieveNest() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white p-6">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-700">AchieveNest</h1>
        <p className="text-lg text-gray-600 mt-2">
          A safe space for children to share their achievements and get rewarded
        </p>
      </header>

      <section className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Upload Achievement</h2>
          <input type="text" placeholder="Title of your achievement" className="mb-3 w-full p-2 border rounded" />
          <textarea placeholder="Describe what you did..." className="mb-3 w-full p-2 border rounded"></textarea>
          <input type="file" className="mb-4 w-full" />
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white p-2 rounded">
            Submit Video
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-green-600">Monthly Rewards</h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li>STEM Kits for top submissions</li>
            <li>Gift Vouchers & Books</li>
            <li>Entry to Annual Talent Awards</li>
          </ul>
          <button className="mt-6 bg-green-500 hover:bg-green-600 text-white p-2 rounded">
            View Reward Catalog
          </button>
        </div>
      </section>

      <motion.section
        className="bg-white rounded-2xl shadow-lg p-6 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-4 text-purple-700">Why Join AchieveNest?</h2>
        <ul className="list-inside list-disc text-gray-700 space-y-2">
          <li>Safe, moderated space for kids to shine</li>
          <li>Encourages creativity, leadership & learning</li>
          <li>Exclusive scholarships for future ventures</li>
          <li>Community support and national exposure</li>
        </ul>
      </motion.section>
    </div>
  );
}
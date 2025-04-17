import React from 'react'

function Quran() {
    return (
        <div className="bg-gradient-to-b from-green-100 to-white min-h-screen p-6">
          <h1 className="text-3xl font-bold text-center mb-6">Seek Wisdom from the Quran</h1>
          <textarea
            className="w-full h-64 p-4 border rounded-lg shadow-lg resize-none"
            placeholder="Enter your problem..."
          ></textarea>
          <button className="mt-4 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
            Get Solution
          </button>
        </div>
      );
}

export default Quran
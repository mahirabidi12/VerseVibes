import React from 'react'

function Tanakh() {
    return (
        <div className="bg-gradient-to-b from-purple-100 to-white min-h-screen p-6">
          <h1 className="text-3xl font-bold text-center mb-6">Explore Wisdom from the Tanakh</h1>
          <textarea
            className="w-full h-64 p-4 border rounded-lg shadow-lg resize-none"
            placeholder="What’s troubling you?"
          ></textarea>
          <button className="mt-4 bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700">
            Get Solution
          </button>
        </div>
      );
}

export default Tanakh
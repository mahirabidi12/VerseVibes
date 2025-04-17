import React from 'react'

function Geeta() {
    return (
        <div className="bg-gradient-to-b from-yellow-100 to-white min-h-screen p-6">
          <h1 className="text-3xl font-bold text-center mb-6">Learn from the Geeta</h1>
          <textarea
            className="w-full h-64 p-4 border rounded-lg shadow-lg resize-none"
            placeholder="Describe your challenge..."
          ></textarea>
          <button className="mt-4 bg-yellow-600 text-white px-6 py-2 rounded hover:bg-yellow-700">
            Get Solution
          </button>
        </div>
      );
}

export default Geeta
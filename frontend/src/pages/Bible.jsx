import React from 'react'

function Bible() {
    return (
        <div className="bg-gradient-to-b from-blue-100 to-white min-h-screen p-6">
          <h1 className="text-3xl font-bold text-center mb-6">Find Strength in the Bible</h1>
          <textarea
            className="w-full h-64 p-4 border rounded-lg shadow-lg resize-none"
            placeholder="Enter your concern..."
          ></textarea>
          <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            Get Solution
          </button>
        </div>
      );
}

export default Bible
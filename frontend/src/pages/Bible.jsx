import React, { useState } from 'react';

function Bible() {
  const [concern, setConcern] = useState('');
  const [solution, setSolution] = useState('');

  const handleSubmit = async () => {
    if (concern.trim()) {

      const response = await fetch('http://localhost:3000/bible', { method: 'POST', body: JSON.stringify({ concern }) });
      const data = await response.json();
      setSolution(data); 
    }
  };

  return (
    <div className="bg-gradient-to-b from-blue-100 to-white min-h-screen p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">Find Strength in the Bible</h1>
        <textarea
          className="w-full h-40 p-4 border rounded-lg shadow-lg resize-none mb-4"
          placeholder="Enter your concern..."
          value={concern}
          onChange={(e) => setConcern(e.target.value)}
        ></textarea>
        <button
          onClick={handleSubmit}
          className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors duration-300"
        >
          Get Solution
        </button>
        

        {solution && (
          <div className="mt-6 p-4 bg-blue-100 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-blue-800">Solution:</h3>
            <p className="text-lg">{solution}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Bible;

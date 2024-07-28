'use client';
import React, { useState } from 'react';

const FirstPage: React.FC = () => {
  const [formData, setFormData] = useState({
    team1: '',
    team2: '',
    overs: '',
    runs: '',
    wickets: '',
    runs_in_prev_5: '',
    wickets_in_prev_5: ''
  });

  const [prediction, setPrediction] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/predict', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    const data = await response.json();
    setPrediction(data.prediction);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center bg-[url('https://imgs.search.brave.com/OUrqcJ48zQRQiN0JUL9Dhb_j8E1KVk5G8wdvCho3TKQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvMTA4/ODYyNy5qcGc')]  bg-blur-lg">
      <div className="bg-white p-8 rounded-lg shadow-xl w-96">
        <h2 className="text-3xl font-extrabold mb-8 text-center text-gray-800">Predict Score</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="team1" className="block text-gray-700 font-medium">Team 1</label>
            <select
              id="team1"
              value={formData.team1}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option className='text-black' value="" disabled>Select a Batting team</option>
              <option className='text-black' value="Mumbai Indians">Mumbai Indians</option>
              <option className='text-black' value="Kolkata Knight Riders">Kolkata Knight Riders</option>
              <option className='text-black' value="Chennai Super Kings">Chennai Super Kings</option>
              <option className='text-black' value="Rajasthan Royals">Rajasthan Royals</option>
              <option className='text-black' value="Kings XI Punjab">Kings XI Punjab</option>
              <option className='text-black' value="Royal Challengers Bangalore">Royal Challengers Bangalore</option>
              <option className='text-black' value="Delhi Daredevils">Delhi Daredevils</option>
              <option className='text-black' value="Sunrisers Hyderabad">Sunrisers Hyderabad</option>
            </select>
          </div>
          <div>
            <label htmlFor="team2" className="block text-gray-700 font-medium">Team 2</label>
            <select
              id="team2"
              value={formData.team2}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option className='text-black' value="" disabled>Select a Bowling team</option>
              <option className='text-black' value="Mumbai Indians">Mumbai Indians</option>
              <option className='text-black' value="Kolkata Knight Riders">Kolkata Knight Riders</option>
              <option className='text-black' value="Chennai Super Kings">Chennai Super Kings</option>
              <option className='text-black' value="Rajasthan Royals">Rajasthan Royals</option>
              <option className='text-black' value="Kings XI Punjab">Kings XI Punjab</option>
              <option className='text-black' value="Royal Challengers Bangalore">Royal Challengers Bangalore</option>
              <option className='text-black' value="Delhi Daredevils">Delhi Daredevils</option>
              <option className='text-black' value="Sunrisers Hyderabad">Sunrisers Hyderabad</option>
            </select>
          </div>
          <div className="space-y-4">
            <div>
              <label htmlFor="overs" className="block text-gray-700 font-medium">Overs</label>
              <input
                type="text"
                id="overs"
                value={formData.overs}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Overs (>= 5.0) e.g., 7.2"
              />
            </div>
            <div>
              <label htmlFor="runs" className="block text-gray-700 font-medium">Runs</label>
              <input
                type="text"
                id="runs"
                value={formData.runs}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Runs e.g., 64"
              />
            </div>
            <div>
              <label htmlFor="wickets" className="block text-gray-700 font-medium">Wickets</label>
              <input
                type="text"
                id="wickets"
                value={formData.wickets}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Wickets e.g., 4"
              />
            </div>
            <div>
              <label htmlFor="runs_in_prev_5" className="block text-gray-700 font-medium">Runs in Previous 5 Overs</label>
              <input
                type="text"
                id="runs_in_prev_5"
                value={formData.runs_in_prev_5}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Runs in previous 5 overs e.g., 42"
              />
            </div>
            <div>
              <label htmlFor="wickets_in_prev_5" className="block text-gray-700 font-medium">Wickets in Previous 5 Overs</label>
              <input
                type="text"
                id="wickets_in_prev_5"
                value={formData.wickets_in_prev_5}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Wickets in previous 5 overs e.g., 3"
              />
            </div>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Predict
            </button>
          </div>
        </form>
        {prediction && (
          <div className="mt-8 text-center text-gray-800">
            <h3 className="text-xl font-semibold">Predicted Score: {prediction}</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default FirstPage;

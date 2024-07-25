'use client';
import React from 'react';

const FirstPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-200">
      <div className="bg-white p-8 rounded-lg shadow-xl w-96">
        <h2 className="text-3xl font-extrabold mb-8 text-center text-gray-800">Predict Score</h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="input1" className="block text-gray-700 font-medium">Team 1</label>
            <select 
              id="input1" 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="" disabled selected>Select a Batting team</option>
              <option value="Mumbai Indians">Mumbai Indians</option>
              <option value="Kolkata Knight Riders">Kolkata Knight Riders</option>
              <option value="Chennai Super Kings">Chennai Super Kings</option>
              <option value="Rajasthan Royals">Rajasthan Royals</option>
              <option value="Kings XI Punjab">Kings XI Punjab</option>
              <option value="Royal Challengers Bangalore">Royal Challengers Bangalore</option>
              <option value="Delhi Daredevils">Delhi Daredevils</option>
              <option value="Sunrisers Hyderabad">Sunrisers Hyderabad</option>
            </select>
          </div>
          <div>
            <label htmlFor="input2" className="block text-gray-700 font-medium">Team 2</label>
            <select 
              id="input2" 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="" disabled selected>Select a Bowling team</option>
              <option value="Mumbai Indians">Mumbai Indians</option>
              <option value="Kolkata Knight Riders">Kolkata Knight Riders</option>
              <option value="Chennai Super Kings">Chennai Super Kings</option>
              <option value="Rajasthan Royals">Rajasthan Royals</option>
              <option value="Kings XI Punjab">Kings XI Punjab</option>
              <option value="Royal Challengers Bangalore">Royal Challengers Bangalore</option>
              <option value="Delhi Daredevils">Delhi Daredevils</option>
              <option value="Sunrisers Hyderabad">Sunrisers Hyderabad</option>
            </select>
          </div>
          <div className="space-y-4">
            <div>
              <label htmlFor="overs" className="block text-gray-700 font-medium">Overs</label>
              <input 
                type="text" 
                id="overs" 
                name="overs" 
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                placeholder="Overs (>= 5.0) e.g., 7.2"
              />
            </div>
            <div>
              <label htmlFor="runs" className="block text-gray-700 font-medium">Runs</label>
              <input 
                type="text" 
                id="runs" 
                name="runs" 
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                placeholder="Runs e.g., 64"
              />
            </div>
            <div>
              <label htmlFor="wickets" className="block text-gray-700 font-medium">Wickets</label>
              <input 
                type="text" 
                id="wickets" 
                name="wickets" 
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                placeholder="Wickets e.g., 4"
              />
            </div>
            <div>
              <label htmlFor="runs_in_prev_5" className="block text-gray-700 font-medium">Runs in Previous 5 Overs</label>
              <input 
                type="text" 
                id="runs_in_prev_5" 
                name="runs_in_prev_5" 
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                placeholder="Runs in previous 5 overs e.g., 42"
              />
            </div>
            <div>
              <label htmlFor="wickets_in_prev_5" className="block text-gray-700 font-medium">Wickets in Previous 5 Overs</label>
              <input 
                type="text" 
                id="wickets_in_prev_5" 
                name="wickets_in_prev_5" 
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
      </div>
    </div>
  );
};

export default FirstPage;

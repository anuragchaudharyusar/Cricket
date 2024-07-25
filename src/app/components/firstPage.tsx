'use client'
import React from 'react'

const FirstPage = ()=> {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Predict Score</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="input1" className="block text-gray-700">Team 1</label>
            <select 
              id="input1" 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="" disabled selected>Select an option</option>
              <option value="none">--- Select a Batting team ---</option>
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
            <label htmlFor="input2" className="block text-gray-700">Team 2</label>
            <select 
              id="input2" 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="" disabled selected>Select an option</option>
              <option value="none">--- Select a Bowling team ---</option>
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
                    <label htmlFor="input3" className="block text-gray-700">Overs</label>
                    <input className="form-input" type="text" name="overs" placeholder="Overs (>= 5.0) eg. 7.2"/>
                    <label htmlFor="input3" className="block text-gray-700">Runs</label>
                    <input className="form-input" type="text" name="runs" placeholder="Runs eg. 64"/>
                    <label htmlFor="input3" className="block text-gray-700">Wickets</label>
                    <input className="form-input" type="text" name="wickets" placeholder="Wickets eg. 4"/>
                    <label htmlFor="input3" className="block text-gray-700">Runs_in_prev_5</label>
                    <input className="form-input" type="text" name="runs_in_prev_5" placeholder="Runs scored in previous 5 Overs eg. 42"/>
                    <label htmlFor="input3" className="block text-gray-700">Wickets_in_prev_5</label>
                    <input className="form-input" type="text" name="wickets_in_prev_5" placeholder="Wickets taken in previous 5 Overs eg. 3"/>
           
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
  )
}

export default FirstPage;

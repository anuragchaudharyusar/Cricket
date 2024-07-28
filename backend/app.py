from flask import Flask, request, jsonify
import pickle
import numpy as np

app = Flask(__name__)

# Load the model
with open('first-innings-score-lr-model.pkl', 'rb') as file:
    model = pickle.load(file)

# Load the scaler
with open('scaler.pkl', 'rb') as file:
    scaler = pickle.load(file)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    
    # Prepare the input data
    input_data = np.array([[
        data['runs'], 
        data['wickets'], 
        data['overs'], 
        data['runs_last_5'], 
        data['wickets_last_5']
    ]])

    # Standardize the input data
    input_data_scaled = scaler.transform(input_data)
    
    # Make the prediction
    prediction = model.predict(input_data_scaled)

    return jsonify({'prediction': prediction[0]})

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')

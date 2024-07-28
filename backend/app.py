from flask import Flask, request, jsonify
import pickle
import numpy as np

app = Flask(__name__)

# Load the model and scaler
with open('first-innings-score-lr-model.pkl', 'rb') as f:
    model = pickle.load(f)

with open('scaler.pkl', 'rb') as f:
    scaler = pickle.load(f)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json(force=True)
    features = [data['runs'], data['wickets'], data['overs'], data['runs_last_5'], data['wickets_last_5']]
    features = np.array(features).reshape(1, -1)
    features_scaled = scaler.transform(features)
    prediction = model.predict(features_scaled)
    return jsonify({'prediction': prediction[0]})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)

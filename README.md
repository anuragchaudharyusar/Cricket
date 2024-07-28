# Cricket Score Predictor (CSP)
This project is a Cricket Score Predictor application built using Flask for the backend and Next.js for the frontend. The backend uses a machine learning model to predict the score of a cricket match based on input features.

# Project Structure
Cricket
│
├── backend
│   ├── Dockerfile
│   ├── app.py
│   ├── first-innings-score-lr-model.pkl
│   ├── requirements.txt
│   ├── scaler.pkl
│   ├── train_model.py
│   └── ipl.csv
│
├── frontend
│   ├── Dockerfile
│   ├── public
│   ├── src
│   ├── .eslintrc.json
│   ├── .gitignore
│   ├── next.config.mjs
│   ├── package-lock.json
│   ├── package.json
│   ├── postcss.config.mjs
│   ├── tailwind.config.ts
│   ├── tsconfig.json
│   └── README.md
│
└── docker-compose.yml
# Prerequisites
Next.js
Docker
Docker Compose

# Training the Model
To train the model, run:
python backend/train_model.py

This script will:
Load the dataset from ipl.csv.
Preprocess the data and split it into training and testing sets.
Train a Linear Regression model.
Save the trained model (first-innings-score-lr-model.pkl) and the scaler (scaler.pkl).
Endpoint :-
predict: This endpoint accepts input features and returns the predicted cricket score.

# Frontend Details
The frontend is a Next.js application that provides a user interface for interacting with the backend and getting cricket score predictions.

# Development
To start the development server for the frontend:
cd frontend
npm install
npm run dev
Production

The Docker setup takes care of building and starting the production server for the frontend. The build step ensures that the Next.js app is built before starting the server.

# Issues
Common Issue: Could not find a production build in the '.next' directory
If you encounter this error, ensure that the Dockerfile for the frontend includes the RUN npm run build step and that the .next directory is not being ignored in .dockerignore.

# Contributing
Feel free to open issues or submit pull requests. Any contributions are welcome!

This README file provides a comprehensive guide to setting up, running, and understanding the project. Adjust any paths or details specific to your project as needed.

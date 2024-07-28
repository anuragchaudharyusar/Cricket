import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestRegressor
import pickle

# Load the dataset
dataset = pd.read_csv('../ipl.csv')
# Selecting relevant features
X = dataset[['runs', 'wickets', 'overs', 'runs_last_5', 'wickets_last_5']].values
y = dataset['total'].values  # Target column

# Split the dataset into training and test sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.25, random_state=0)

# Standardize the features
sc = StandardScaler()
X_train = sc.fit_transform(X_train)
X_test = sc.transform(X_test)

# Train the model
model = RandomForestRegressor(n_estimators=100, max_features=None)
model.fit(X_train, y_train)

# Save the model to a file
with open('first-innings-score-lr-model.pkl', 'wb') as file:
    pickle.dump(model, file)

# Save the scaler to a file
with open('scaler.pkl', 'wb') as file:
    pickle.dump(sc, file)

# Evaluate the model
y_pred = model.predict(X_test)
score = model.score(X_test, y_test) * 100
print(f"R-squared value: {score:.2f}")

def custom_accuracy(y_test, y_pred, threshold=10):
    correct = sum(abs(y_pred - y_test) <= threshold)
    return (correct / len(y_test)) * 100

accuracy = custom_accuracy(y_test, y_pred)
print(f"Custom accuracy: {accuracy:.2f}")

# Predict for a new example (optional)
example = np.array([[100, 0, 13, 50, 50]])
example_scaled = sc.transform(example)
new_prediction = model.predict(example_scaled)
print(f"Prediction score: {new_prediction[0]:.2f}")

import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LinearRegression
import pickle

# Load the dataset
dataset = pd.read_csv('../ipl.csv')
X = dataset.iloc[:, [7, 8, 9, 12, 13]].values  # Input features
y = dataset.iloc[:, 14].values  # Label

# Split the dataset into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.25, random_state=0)

# Standardize the features
sc = StandardScaler()
X_train = sc.fit_transform(X_train)
X_test = sc.transform(X_test)

# Initialize and train the Linear Regression model
lr = LinearRegression()
lr.fit(X_train, y_train)

# Save the model
with open('first-innings-score-lr-model.pkl', 'wb') as f:
    pickle.dump(lr, f)

# Save the scaler
with open('scaler.pkl', 'wb') as f:
    pickle.dump(sc, f)

# Custom accuracy function
def custom_accuracy(y_test, y_pred, threshold):
    right = 0
    l = len(y_pred)
    for i in range(l):
        if abs(y_pred[i] - y_test[i]) <= threshold:
            right += 1
    return (right / l) * 100

# Make predictions
y_pred = lr.predict(X_test)
score = lr.score(X_test, y_test) * 100
print("R-squared value:", score)
print("Custom accuracy:", custom_accuracy(y_test, y_pred, 10))

# Example prediction
new_prediction = lr.predict(sc.transform(np.array([[100, 0, 13, 50, 50]])))
print("Prediction score:", new_prediction)

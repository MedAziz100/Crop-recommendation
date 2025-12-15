# app/main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import pandas as pd
from .model_loader import MODEL

app = FastAPI()

# 🔹 Middleware CORS pour le frontend Next.js
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # adresse de ton frontend
    allow_methods=["*"],
    allow_headers=["*"],
)

# Liste des cultures
CROP_NAMES = [
    'rice', 'maize', 'chickpea', 'kidneybeans', 'pigeonpeas',
    'mothbeans', 'mungbean', 'blackgram', 'lentil', 'pomegranate',
    'banana', 'mango', 'grapes', 'watermelon', 'muskmelon',
    'apple', 'orange', 'papaya', 'coconut', 'cotton',
    'jute', 'coffee'
]

# 🔹 Modèle de données d'entrée
class InputData(BaseModel):
    N: float
    P: float
    K: float
    temperature: float
    humidity: float
    ph: float
    rainfall: float

# 🔹 Route de prédiction
@app.post("/predict")
def predict(data: InputData):
    features = pd.DataFrame([{
        'N': data.N,
        'P': data.P,
        'K': data.K,
        'temperature': data.temperature,
        'humidity': data.humidity,
        'ph': data.ph,
        'rainfall': data.rainfall
    }])

    prediction = MODEL.predict(features)[0]
    prediction_index = int(prediction)
    crop_name = CROP_NAMES[prediction_index]

    return {
        "crop_recommendation": crop_name,
        "crop_index": prediction_index
    }

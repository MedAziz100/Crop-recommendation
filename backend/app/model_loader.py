# app/model_loader.py
import os
import joblib
from dotenv import load_dotenv

# Charger les variables du fichier .env
load_dotenv()

# Récupérer le chemin du modèle
MODEL_PATH = os.getenv("MODEL_PATH", "models/crop_model_rf.pkl")

# Vérifier l'existence du modèle
if not os.path.exists(MODEL_PATH):
    raise FileNotFoundError(f"❌ Le fichier modèle n'existe pas : {MODEL_PATH}")

def load_model():
    model = joblib.load(MODEL_PATH)
    model_type = "sklearn_randomforest"
    return model, model_type

# Charger le modèle au démarrage
MODEL, MODEL_TYPE = load_model()

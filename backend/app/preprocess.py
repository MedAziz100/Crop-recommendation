# app/preprocess.py
import numpy as np

def preprocess_input(data: dict, scaler=None):
    """
    Prétraite les données d'entrée avec normalisation optionnelle
    
    Args:
        data: Dictionnaire contenant les features
        scaler: StandardScaler ou MinMaxScaler (optionnel)
    
    Returns:
        numpy array de shape (1, 7) prêt pour la prédiction
    """
    # Ordre exact des features utilisées lors de l'entraînement
    features_order = ["N", "P", "K", "temperature", "humidity", "ph", "rainfall"]
    
    # Extraire les valeurs dans le bon ordre
    arr = [float(data.get(f, 0)) for f in features_order]
    
    # Convertir en numpy array
    x = np.array([arr])
    
    # Appliquer le scaler si disponible
    if scaler is not None:
        x = scaler.transform(x)
        print(f"✅ Normalisation appliquée avec scaler")
    else:
        print(f"⚠️ Pas de normalisation (scaler manquant)")
    
    return x
'use client';

import { useState } from 'react';
import CropForm, { FormData } from './components/CropForm';

export default function HomePage() {
  const [loading, setLoading] = useState(false);
  const [prediction, setPrediction] = useState('');

  const handleSubmit = async (data: FormData) => {
  setLoading(true);

  // Vérifier si tous les paramètres = 0
  const isAllZero = Object.values(data).every((value) => Number(value) === 0);

  if (isAllZero) {
    setPrediction("");  // rien afficher
    setLoading(false);
    return;
  }

  try {
    const response = await fetch('http://127.0.0.1:8000/predict', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    setPrediction(result.crop_recommendation);
  } catch (error) {
    console.error('Prediction error:', error);
    setPrediction('');
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="min-h-screen py-12 px-4 relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: 'url(/images/background.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      />

      {/* Overlay semi-transparent */}
      <div className="absolute inset-0 -z-10 bg-black/20" />

      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <h1 className="text-4xl font-bold text-center text-white drop-shadow-lg">
          🌱 Crop Recommendation System
        </h1>
      </div>

      {/* Layout en 2 colonnes — paramètres plus grands */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Colonne Gauche - Formulaire agrandi (2/3 largeur) */}
        <div className="lg:col-span-2 scale-[1.05] origin-top-left">
          <CropForm onSubmit={handleSubmit} loading={loading} />
        </div>

        {/* Colonne Droite - Résultat réduit (1/3 largeur) */}
        <div className="flex items-start">
          {prediction ? (
            <div className="w-full p-6 bg-white rounded-2xl shadow-xl scale-[0.9] origin-top-right">
              <h2 className="text-xl font-bold text-center mb-4">
                Recommended Crop: {prediction}
              </h2>
              <div className="flex justify-center">
                <img
                  src={`/images/${prediction}.jpg`}
                  alt={prediction}
                  className="rounded-lg shadow-lg max-h-72 object-cover"
                />
              </div>
            </div>
          ) : (
            <div className="w-full p-6 bg-white/60 backdrop-blur-md rounded-2xl shadow-xl border-2 border-dashed border-gray-300 scale-[0.9] origin-top-right min-h-[350px]">
              <div className="flex flex-col items-center justify-center h-full text-center">
                <div className="text-5xl mb-3">🌾</div>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                  Waiting for Recommendation
                </h3>
                <p className="text-gray-500 text-sm">
                  Fill in the parameters and click "Get Recommendation" to see the suggested crop
                </p>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

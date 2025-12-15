'use client';

import { useState } from 'react';
import { Leaf, Thermometer, Droplets, FlaskConical, Cloud, Beaker } from 'lucide-react';

export interface FormData {
  N: number;
  P: number;
  K: number;
  temperature: number;
  humidity: number;
  ph: number;
  rainfall: number;
}

interface CropFormProps {
  onSubmit: (data: FormData) => void;
  loading: boolean;
}

export default function CropForm({ onSubmit, loading }: CropFormProps) {
  const [formData, setFormData] = useState<FormData>({
    N: 0,
    P: 0,
    K: 0,
    temperature: 0,
    humidity: 0,
    ph: 0,
    rainfall: 0
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value === "" ? 0 : parseFloat(value)
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/60 backdrop-blur-md rounded-2xl p-8 shadow-xl"
    >
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <Leaf className="text-green-600" /> Soil & Climate Parameters
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div>
          <label className="block text-sm font-semibold mb-2 flex items-center gap-2">
            <FlaskConical className="w-4 h-4 text-blue-600" /> Nitrogen (N)
          </label>
          <input
            type="number"
            name="N"
            value={formData.N}
            onChange={handleChange}
            className="input-field"
            step="0.1"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2 flex items-center gap-2">
            <FlaskConical className="w-4 h-4 text-orange-600" /> Phosphorus (P)
          </label>
          <input
            type="number"
            name="P"
            value={formData.P}
            onChange={handleChange}
            className="input-field"
            step="0.1"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2 flex items-center gap-2">
            <FlaskConical className="w-4 h-4 text-purple-600" /> Potassium (K)
          </label>
          <input
            type="number"
            name="K"
            value={formData.K}
            onChange={handleChange}
            className="input-field"
            step="0.1"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2 flex items-center gap-2">
            <Thermometer className="w-4 h-4 text-red-600" /> Temperature °C
          </label>
          <input
            type="number"
            name="temperature"
            value={formData.temperature}
            onChange={handleChange}
            className="input-field"
            step="0.1"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2 flex items-center gap-2">
            <Droplets className="w-4 h-4 text-cyan-600" /> Humidity %
          </label>
          <input
            type="number"
            name="humidity"
            value={formData.humidity}
            onChange={handleChange}
            className="input-field"
            step="0.1"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2 flex items-center gap-2">
            <Beaker className="w-4 h-4 text-green-600" /> Soil pH
          </label>
          <input
            type="number"
            name="ph"
            value={formData.ph}
            onChange={handleChange}
            className="input-field"
            step="0.1"
            min="0"
            max="14"
            required
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-semibold mb-2 flex items-center gap-2">
            <Cloud className="w-4 h-4 text-gray-600" /> Rainfall (mm)
          </label>
          <input
            type="number"
            name="rainfall"
            value={formData.rainfall}
            onChange={handleChange}
            className="input-field"
            step="0.1"
            required
          />
        </div>

      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn-primary w-full mt-8 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? 'Processing...' : 'Get Recommendation'}
      </button>
    </form>
  );
}

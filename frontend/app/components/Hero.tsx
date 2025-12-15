import { Sprout, Cloud, Droplets } from 'lucide-react';

export default function Hero() {
  return (
    <div className="text-center mb-12">
      <div className="flex justify-center gap-4 mb-6">
        <div className="bg-green-100 p-4 rounded-full animate-bounce">
          <Sprout className="w-8 h-8 text-green-600" />
        </div>
        <div className="bg-blue-100 p-4 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}>
          <Cloud className="w-8 h-8 text-blue-600" />
        </div>
        <div className="bg-cyan-100 p-4 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}>
          <Droplets className="w-8 h-8 text-cyan-600" />
        </div>
      </div>
      
      <h1 className="text-5xl font-bold text-gray-800 mb-4">
        🌾 Système de Recommandation de Cultures
      </h1>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Obtenez des recommandations intelligentes basées sur les conditions de votre sol et le climat
      </p>
    </div>
  );
}
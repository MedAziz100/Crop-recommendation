'use client';

interface ResultCardProps {
  crop: string;
}

export default function ResultCard({ crop }: ResultCardProps) {
  // Liste des cultures dont tu as les images
  const availableImages = [
    'rice', 'wheat', 'maize', 'cotton', 'jute', 'coconut', 
    'papaya', 'orange', 'apple', 'muskmelon', 'watermelon',
    'grapes', 'mango', 'banana', 'pomegranate', 'lentil',
    'blackgram', 'mungbean', 'mothbeans', 'pigeonpeas',
    'kidneybeans', 'chickpea', 'coffee'
  ];

  const hasImage = availableImages.includes(crop.toLowerCase());

  // Capitalize pour un affichage propre
  const capitalize = (s: string) =>
    s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();

  return (
    <div className="mt-8 bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-6 md:p-8 border border-green-100 animate-fade-in">
      <div className="text-center">
        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
          🌾 Recommended Crop
        </h3>

        {/* Crop Image */}
        <div className="mb-6 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl blur-xl opacity-20"></div>

            <div className="relative w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl shadow-2xl border-4 border-white flex items-center justify-center overflow-hidden">
              {hasImage ? (
                <img
                  src={`/images/${crop.toLowerCase()}.png`}
                  alt={capitalize(crop)}
                  className="w-full h-full object-cover transition-opacity duration-500 ease-in-out opacity-0"
                  loading="lazy"
                  onLoad={(e) => (e.currentTarget.style.opacity = '1')}
                />
              ) : (
                <div className="text-center">
                  <div className="text-6xl mb-2">🌱</div>
                  <p className="text-gray-600 font-medium text-sm">{capitalize(crop)}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Crop Name */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4 px-8 rounded-2xl inline-block shadow-lg">
          <p className="text-2xl md:text-3xl font-bold">{capitalize(crop)}</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}

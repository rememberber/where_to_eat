import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Utensils, MapPin } from 'lucide-react';
import Navbar from './components/Navbar';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';

const restaurants = {
  building1: {
    B: [2, 3, 4, 5, 6],
    D: [3, 4],
    F: [3, 4, 5]
  },
  building2: {
    A: [3, 4, 5],
    B: [3, 4, 5],
    C: [3, 4]
  }
};

function App() {
  const { t, i18n } = useTranslation();
  const [recommendation, setRecommendation] = useState<string | null>(null);
  const [confetti, setConfetti] = useState(false);
  const { width, height } = useWindowSize();

  const getRandomRestaurant = () => {
    const building = Math.random() < 0.5 ? 'building1' : 'building2';
    const buildingName = building === 'building1' ? '一' : '二';
    const seats = restaurants[building];
    const seatKeys = Object.keys(seats);
    const randomSeat = seatKeys[Math.floor(Math.random() * seatKeys.length)];
    const floors = seats[randomSeat];
    const randomFloor = floors[Math.floor(Math.random() * floors.length)];
    return `${buildingName}号楼 ${randomSeat}座 ${randomFloor}F`;
  };

  const handleRecommend = () => {
    setConfetti(true);
    setRecommendation(getRandomRestaurant());
    setTimeout(() => setConfetti(false), 4000); // Confetti effect lasts for 3 seconds
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 dark:from-gray-800 dark:to-gray-900 flex flex-col items-center justify-center p-4">
      <Navbar />
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 max-w-md w-full mt-16">
        <h1 className="text-3xl font-bold text-center text-indigo-600 dark:text-indigo-400 mb-6">{t('title')}</h1>
        <div className="flex justify-center mb-6">
          <Utensils className="w-16 h-16 text-indigo-500 dark:text-indigo-300" />
        </div>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
          {t('description')}
        </p>
        <button
          onClick={handleRecommend}
          className="w-full bg-indigo-600 dark:bg-indigo-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-600 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
        >
          {t('recommendButton')}
        </button>
        {recommendation && (
          <div className="mt-8 text-center">
            <p className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">{t('recommendation')}</p>
            <div className="bg-yellow-100 rounded-lg p-6 shadow-inner">
              <p className="text-5xl font-bold text-blue-700 break-words leading-tight">{recommendation}</p>
            </div>
          </div>
        )}
      </div>
      {confetti && <Confetti width={width} height={height} />}
    </div>
  );
}

export default App;
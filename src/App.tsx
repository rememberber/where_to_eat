import React, { useState } from 'react';
import { Utensils, MapPin } from 'lucide-react';

// 更新餐厅数据
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
  const [recommendation, setRecommendation] = useState<string | null>(null);

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
    setRecommendation(getRandomRestaurant());
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">去哪吃</h1>
        <div className="flex justify-center mb-6">
          <Utensils className="w-16 h-16 text-indigo-500" />
        </div>
        <p className="text-center text-gray-600 mb-6">
          不知道午餐或晚餐吃什么？让我们帮你决定！
        </p>
        <button
          onClick={handleRecommend}
          className="w-full bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
        >
          随机推荐
        </button>
        {recommendation && (
          <div className="mt-8 text-center">
            <p className="text-lg font-semibold text-gray-800 mb-2">推荐地点：</p>
            <div className="flex items-center justify-center text-2xl font-bold text-indigo-600">
              <MapPin className="w-6 h-6 mr-2" />
              {recommendation}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
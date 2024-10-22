import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Home } from 'lucide-react'; // 引入矢量图标

const Navbar: React.FC = () => {
  const { i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setMenuOpen(false); // 选择语言后收起菜单
  };

  return (
    <nav className="bg-white bg-opacity-75 dark:bg-gray-800 dark:bg-opacity-75 fixed top-0 left-0 right-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Home className="text-indigo-600 dark:text-indigo-400 w-8 h-8" /> {/* 使用矢量图标 */}
          </div>
          <div className="ml-4 flex items-center md:ml-6">
            <div className="relative">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-2 rounded-md text-sm font-medium"
              >
                Language
              </button>
              {menuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-700 rounded-md shadow-lg py-1">
                  <button onClick={() => changeLanguage('en')} className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200">English</button>
                  <button onClick={() => changeLanguage('zh')} className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200">简体中文</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
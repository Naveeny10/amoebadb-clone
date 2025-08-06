import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

import backgroundImage from '../data/Image/image.png';
import image1 from '../data/Image/image1.png';
import { searchItems } from '../data/searchData.js';
import { useSearchSuggestions } from '../hooks/useSearchSuggestions';

const Navbar = () => {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState('');

  const suggestions = useSearchSuggestions(searchItems, searchInput);

  const handleUserIconClick = () => {
    navigate('/login');
  };

  const handleSearch = () => {
    if (searchInput.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchInput)}`);
      setSearchInput('');
    }
  };

  return (
    <div className="bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="container mx-auto py-5 px-10 text-white">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src={image1} alt="AmoebaDB Logo" className="h-16 mr-4" />
            <div>
              <div className="text-lg font-bold">AmoebaDB.local</div>
              <div className="text-sm">Amoeba Informatics Resources</div>
            </div>
          </div>


          <div className="flex-grow ml-48 mx-4 relative">
            <div className="w-[550px] relative">
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                placeholder="Site search, e.g. EDL.244000 or 'reductase' or 'binding protein'"
                className="w-full px-4 py-2 border border-gray-300 rounded-full bg-gray-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <FontAwesomeIcon
                icon={faSearch}
                onClick={handleSearch}
                className="absolute right-3 top-3 text-gray-700 cursor-pointer"
              />
            </div>


            {suggestions.length > 0 && (
              <ul className="absolute z-10 bg-white text-black w-[550px] mt-1 rounded-lg shadow-lg max-h-60 overflow-auto">
                {suggestions.map((item, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                    onClick={() => setSearchInput(item)}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <FontAwesomeIcon
            icon={faUserCircle}
            className="text-gray-300 text-3xl cursor-pointer"
            onClick={handleUserIconClick}
          />
        </div>

        <div className="flex justify-center items-center space-x-4 mt-3">
          <a href="#" className="text-gray-800 hover:text-white">My Strategies</a>
          <a href="#" className="text-gray-800 hover:text-white">Searches</a>
          <a href="#" className="text-gray-800 hover:text-white">Tools</a>
          <a href="#" className="text-gray-800 hover:text-white">My Workspace</a>
          <a href="#" className="text-gray-800 hover:text-white">Data</a>
          <a href="#" className="text-gray-800 hover:text-white">About</a>
          <a href="#" className="text-gray-800 hover:text-white">Help</a>
          <a href="#" className="text-gray-800 hover:text-white">Contact Us</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;


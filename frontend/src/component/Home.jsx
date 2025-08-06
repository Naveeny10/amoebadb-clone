import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import backgroundImage from '../data/Image/image.png';
import image1 from '../data/Image/image1.png';
import { useNavigate } from 'react-router-dom';

import { faSearch, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import Navbar from './Navbar';

const categories = [
  { id: 1, title: 'Genes' },
  { id: 2, title: 'Organisms' },
  { id: 3, title: 'Popset Isolate Sequences' },
  { id: 4, title: 'Genomic Sequences' },
  { id: 5, title: 'Genomic Segments' },
  { id: 6, title: 'SNPs' },
  { id: 7, title: 'ESTs' },
  { id: 8, title: 'Metabolic Pathways' },
  { id: 9, title: 'Compounds' },
];


const AccordionItem = ({ title, isActive, onToggle }) => (
  <div
    className={`cursor-pointer px-4 py-3 mt-2 bg-gray-300 rgb(223, 223, 223) rounded-lg ${isActive ? 'bg-gray-400' : 'hover:bg-gray-350'} transition-colors duration-150`}
    onClick={onToggle}
  >
    <h2 className="text-gray-900 font-semibold"><FontAwesomeIcon icon={faCaretRight} />{" "}{title}</h2>
  </div>
);

const HomePage = () => {
  const [activeId, setActiveId] = useState(null);

  const handleToggle = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  const navigate = useNavigate();

  const handleUserIconClick = () => {
    navigate('/home');
  };

  return (
    <div>
        
        <Navbar/>
        <div className="min-h-screen bg-gray-100 flex items-start justify-start p-5">
      <div className="w-1/4  bg-gray-100 shadow-md rounded-none overflow-hidden">
        <div className="px-5 py-3 flex justify-between items-center border-b border-gray-200">
          <h1 className="text-lg font-bold text-gray-800">Search for...</h1>
        </div>
        <div className="flex justify-center items-center">
            <span className="text-xs text-blue-500 cursor-pointer hover:text-blue-600 mr-2">expand all</span>|
            <span className="text-xs text-blue-500 cursor-pointer hover:text-blue-600 ml-2">collapse all</span>
          </div>
        <div className="p-5">
          <input type="text" placeholder="Filter the searches below..." className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <div className="mt-4">
            {categories.map((category) => (
              <AccordionItem
                key={category.id}
                title={category.title}
                isActive={activeId === category.id}
                onToggle={() => handleToggle(category.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default HomePage;






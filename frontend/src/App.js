import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './component/Home';
import ApiTestPage from './component/ApiTestPage';
import Navbar from './component/Navbar';
import SearchResultPage from './component/SearchResultPage/SearchResultPage';
import Taxonomy from './component/taxonomy';
import BasicInfo from './component/BasicInfo';
import GeneFeaturePage from './Pages/GeneFeaturePage.jsx';
import GenomicLocation from './component/genomicLocation.jsx';

function App() {

  return (
    <Routes>
      <Route
        path="/"
        element={<HomePage/>}
      />
      <Route path="/test-api" element={<ApiTestPage />} />
      <Route path="/test-navbar" element={<Navbar/>} />
      <Route path="/search" element={<SearchResultPage />} />
      <Route path="/taxonomy" element={<Taxonomy />} />
      <Route path="/basic" element={<BasicInfo/>} />
      <Route path="/genes/:geneId" element={<GeneFeaturePage/>} />
      <Route path="/genomic" element={<GenomicLocation/>} />
    </Routes>

  );
}

export default App;
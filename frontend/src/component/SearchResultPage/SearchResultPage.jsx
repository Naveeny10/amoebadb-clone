import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../Navbar';
import GeneCardList from './GeneCardList';
import { getFirst10GenesByKeyword } from '../../api/operations/keywordOperations';
import { getGeneById } from '../../api/operations/geneOperations';

const SearchResultPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query1 = queryParams.get('query') || '';
  const query = query1.split(" ")[0];
  const [genes, setGenes] = useState([]);
  const [loading, setLoading] = useState(false);

  // Determine if query is gene ID or keyword
  const isGeneId = /\d/.test(query.split('_').pop());

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        if (isGeneId) {
          const geneData = await getGeneById(query)();
          if (geneData) {
            setGenes([geneData]);
          } else {
            setGenes([]);
          }
        } else {
          const res = await getFirst10GenesByKeyword(query)();
          const ids = res?.gene_ids || [];

          const genePromises = ids.map((id) => getGeneById(id)());
          const geneResults = await Promise.all(genePromises);
          setGenes(geneResults);
        }
      } catch (error) {
        console.error('Failed to fetch genes:', error);
        setGenes([]);
      } finally {
        setLoading(false);
      }
    };

    if (query) fetchData();
  }, [query]);

  return (
    <div>
      <Navbar />
      <div className="px-10 py-6">
        {loading ? (
          <div className="text-center text-xl font-semibold text-gray-600">Loading...</div>
        ) : genes.length > 0 ? (
          <GeneCardList genes={genes} />
        ) : (
          <div className="text-center text-lg text-gray-500">No results found for "{query}"</div>
        )}
      </div>
    </div>
  );
};

export default SearchResultPage;

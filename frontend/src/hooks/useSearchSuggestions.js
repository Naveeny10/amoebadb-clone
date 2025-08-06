import { useState, useEffect } from 'react';

export function useSearchSuggestions(data, query) {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (!query.trim()) {
      setSuggestions([]);
      return;
    }

    const lowerQuery = query.toLowerCase();
    const filtered = data.filter(item =>
      item.toLowerCase().includes(lowerQuery)
    );

    setSuggestions(filtered);
  }, [query, data]);

  return suggestions;
}

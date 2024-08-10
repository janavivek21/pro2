import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PublicQueries = () => {
  const [queries, setQueries] = useState([]);

  useEffect(() => {
    const fetchQueries = async () => {
      try {
        const response = await axios.get('/api/public-queries');
        setQueries(response.data);
      } catch (error) {
        console.error('Error fetching queries', error);
      }
    };
    fetchQueries();
  }, []);

  return (
    <div>
      <h2>Public Queries</h2>
      <ul>
        {queries.map(query => (
          <li key={query.id}>{query.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default PublicQueries;

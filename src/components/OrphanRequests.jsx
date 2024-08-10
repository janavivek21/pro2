import React, { useEffect, useState } from 'react';
import axios from 'axios';

const OrphanRequests = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await axios.get('/api/orphan-requests');
        setRequests(response.data);
      } catch (error) {
        console.error('Error fetching requests', error);
      }
    };
    fetchRequests();
  }, []);

  return (
    <div>
      <h2>Orphan Requests</h2>
      <ul>
        {requests.map(request => (
          <li key={request.id}>{request.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default OrphanRequests;

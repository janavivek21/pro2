import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PointsTracking = () => {
  const [points, setPoints] = useState([]);

  useEffect(() => {
    const fetchPoints = async () => {
      try {
        const response = await axios.get('/api/points-tracking');
        setPoints(response.data);
      } catch (error) {
        console.error('Error fetching points', error);
      }
    };
    fetchPoints();
  }, []);

  return (
    <div>
      <h2>Points Tracking</h2>
      <ul>
        {points.map(point => (
          <li key={point.id}>{point.volunteer}: {point.points}</li>
        ))}
      </ul>
    </div>
  );
};

export default PointsTracking;

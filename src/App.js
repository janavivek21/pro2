import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Register from './components/Register';
import Login from './components/Login';
import PublicQueries from './components/PublicQueries';
import VolunteerQueries from './components/VolunteerQueries';
import OrganizationRequests from './components/OrganizationRequests';
import OrphanRequests from './components/OrphanRequests';
import PointsTracking from './components/PointsTracking';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/public-queries" element={<PublicQueries />} />
        <Route path="/volunteer-queries" element={<VolunteerQueries />} />
        <Route path="/organization-requests" element={<OrganizationRequests />} />
        <Route path="/orphan-requests" element={<OrphanRequests />} />
        <Route path="/points-tracking" element={<PointsTracking />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
};

const Home = () => (
  <div>
    <h1>Welcome to the Social Service Platform</h1>
  </div>
);

export default App;

import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Device from './pages/Device';
import Compare from './pages/Compare';
import Quiz from './pages/Quiz';
import ExploreComponents from './pages/ExploreComponents';

export default function App() {
  return (
    <Layout>
      <Routes>
        {/* Base redirects */}
        <Route path="/" element={<Navigate to="/en" replace />} />
        <Route path="/explore" element={<Navigate to="/en/explore" replace />} />
        <Route path="/components" element={<Navigate to="/en/explore" replace />} />
        <Route path="/compare" element={<Navigate to="/en/compare" replace />} />
        <Route path="/quiz" element={<Navigate to="/en/quiz" replace />} />

        {/* Primary localized routes */}
        <Route path="/en" element={<Home />} />
        <Route path="/en/explore" element={<ExploreComponents />} />
        <Route path="/en/components" element={<ExploreComponents />} />
        <Route path="/en/compare" element={<Compare />} />
        <Route path="/en/quiz" element={<Quiz />} />
        <Route path="/en/:id" element={<Device />} />
        <Route path="/device/:id" element={<Device />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/en" replace />} />
      </Routes>
    </Layout>
  );
}

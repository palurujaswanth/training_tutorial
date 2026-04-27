import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { TutorialView } from './components/TutorialView';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Navigate to="/day/1" replace />} />
          <Route path="/day/:dayId" element={<TutorialView />} />

          <Route path="*" element={<Navigate to="/day/1" replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

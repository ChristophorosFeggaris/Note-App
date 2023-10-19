import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import { Notes } from './pages/Notes';
import React from 'react';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/notes" element={<Notes />} />
      </Routes>
    </div>
  );
}

export default App;

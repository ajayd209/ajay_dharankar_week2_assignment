import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AddEntry from './components/AddEntry';
import EditEntry from './components/EditEntry';

function App() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const savedEntries = JSON.parse(localStorage.getItem('entries')) || [];
    setEntries(savedEntries);
  }, []);

  useEffect(() => {
    localStorage.setItem('entries', JSON.stringify(entries));
  }, [entries]);

  const addEntry = (newEntry) => {
    setEntries([...entries, newEntry]);
  };

  const editEntry = (updatedEntry) => {
    const updatedEntries = entries.map(entry =>
      entry.id === updatedEntry.id ? updatedEntry : entry
    );
    setEntries(updatedEntries);
  };

  const deleteEntry = (id) => {
    setEntries(entries.filter(entry => entry.id !== id));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home entries={entries} deleteEntry={deleteEntry} />} />
        <Route path="/add-entry" element={<AddEntry addEntry={addEntry} />} />
        <Route path="/edit-entry/:id" element={<EditEntry entries={entries} editEntry={editEntry} />} />
      </Routes>
    </Router>
  );
}

export default App;

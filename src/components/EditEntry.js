import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function EditEntry({ entries, editEntry }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [entry, setEntry] = useState({
    title: '',
    location: '',
    date: '',
    description: ''
  });

  useEffect(() => {
    const entryToEdit = entries.find(entry => entry.id === parseInt(id));
    if (entryToEdit) {
      setEntry(entryToEdit);
    }
  }, [id, entries]);

  const handleChange = (e) => {
    setEntry({
      ...entry,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editEntry(entry);
    navigate('/');
  };

  return (
    <div className="form-container">
      <h2>Edit Entry</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={entry.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Location:</label>
          <input
            type="text"
            className="form-control"
            name="location"
            value={entry.location}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Date:</label>
          <input
            type="date"
            className="form-control"
            name="date"
            value={entry.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea
            className="form-control"
            name="description"
            value={entry.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-success">Save Changes</button>
      </form>
    </div>
  );
}

export default EditEntry;

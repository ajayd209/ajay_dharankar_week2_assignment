import React from 'react';
import { Link } from 'react-router-dom';

function Home({ entries, deleteEntry }) {
  return (
    <div>
      <h1>Travel Journal</h1>
      <Link to="/add-entry" className="btn btn-primary">Add New Entry</Link>
      {entries.length === 0 ? (
        <p>No entries available.</p>
      ) : (
        <ul className="entry-list">
          {entries.map((entry) => (
            <li key={entry.id}>
              <h3>{entry.title}</h3>
              <p>{entry.location}</p>
              <p>{entry.date}</p>
              <p>{entry.description}</p>
              <Link to={`/edit-entry/${entry.id}`} className="btn btn-secondary">Edit</Link>
              <button onClick={() => deleteEntry(entry.id)} className="btn btn-danger">Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Home;

import React from 'react';
import SimpleForm from './SimpleForm';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>React Form Integration</h1>
        <p>A demonstration of a modern, aesthetic form component</p>
      </header>
      <main>
        <SimpleForm />
      </main>
    </div>
  );
}

export default App;

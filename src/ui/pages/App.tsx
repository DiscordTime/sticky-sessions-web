import React from 'react';
import './App.css';
import { Server } from '../../data/datasource/server'
import { DataSource } from '../../data/datasource/DataSource'

function App() {
  // TODO: do not do 'new Server()' here
  let dataSource: DataSource = new Server('http://127.0.0.1:3000')
  dataSource.getNotesFromSession('mySessionId')
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;

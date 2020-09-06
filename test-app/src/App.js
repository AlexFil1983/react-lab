import React from 'react';

import './App.css';

function App() {
  return (
    <div className="App">
        <button onClick={() => window.location ='http://localhost:8888/login'} className="login">Login with Spotify</button>
        </div>
  );
}

export default App;

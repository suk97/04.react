import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect }  from 'react';
import Timer from './component/Timer';

function App() {
  const  [showTimer, setShowTimer] = useState(false)
  return (
    <div>
      {showTimer && <Timer /> }
      <button onClick={() => setShowTimer(!showTimer)}>Toggle Timer</button>
    </div>
  );
}

export default App;

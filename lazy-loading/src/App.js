import './App.css';
import React from 'react'
const About = React.lazy(() => import('./About'));

function App() {
  return (
    <div className="App">
      <About/>
    </div>
  );
}

export default App;

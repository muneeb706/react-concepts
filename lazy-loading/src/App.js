import './App.css';
import React, {Suspense} from 'react'
const About = React.lazy(() => import('./About'));

function App() {
  return (
    <div className="App">
      <Suspense fallback = {<div> Please Wait ... </div>} >
        <About/>
      </Suspense>
    </div>
  );
}

export default App;

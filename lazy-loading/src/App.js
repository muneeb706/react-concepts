import './App.css';
import React, {Suspense} from 'react'
import ErrorBoundary from './ErrorBoundary';
const About = React.lazy(() => import('./About'));

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Suspense fallback = {<div> Please Wait ... </div>} >
          <About/>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;

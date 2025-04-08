import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';
import Wrapper from './components/Wrapper';
import CursorDot from './components/CursorDot';
import Loader from './components/Loader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000); // Simulate loading time
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="w-screen h-screen overflow-x-hidden bg-stone-200">
        <CursorDot  />
        {isLoading ? <Loader /> : (
          <Routes>
            <Route path="/" element={<Wrapper />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
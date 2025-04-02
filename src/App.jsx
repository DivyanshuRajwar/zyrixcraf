import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';
import Wrapper from './components/Wrapper';
import CursorDot from './components/CursorDot';
import UiUxPortfolio from "./components/UiUxPortfolio";


function App() {
  return (
    <Router>

      <div className="w-screen h-screen overflow-x-hidden bg-stone-200">
        <CursorDot />
        <Routes>
          <Route path="/" element={<Wrapper />} />
          {/* <Route path="/ui-ux" element={<UiUxPortfolio />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

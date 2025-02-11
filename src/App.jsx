import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import background from './assets/back.jpg';

function App() {
  return (
    <Router>
      <div
        className="h-screen bg-cover bg-center flex flex-col justify-between"
        style={{ backgroundImage: `url(${background})` }}
      >
        <Navbar />
        <div className="flex justify-center mb-[10%]">
          <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
            Get Started, It's Free
          </button>
        </div>
      </div>
    </Router>
  );
}

export default App;

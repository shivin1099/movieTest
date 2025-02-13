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
        <div className="flex flex-col items-center">
          <p className="text-center font-bold text-xl mb-10 text-white font-size:20 mb-[20px]">
            Track the films you watch and want to watch and get personal recommendations with us bitches
          </p>
          <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 mb-[50px]">
            Get Started, It's Free
          </button>
        </div>
      </div>
    </Router>
  );
}

export default App;

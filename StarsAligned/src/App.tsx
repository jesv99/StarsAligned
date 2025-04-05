/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import './App.css';


const Home: React.FC = () => <h2>Home Page</h2>;
const About: React.FC = () => <h1>About Page</h1>;
const Contact: React.FC = () => <h1>Contact Page</h1>;

const App: React.FC = () => {
  return (
    <Router>
      <div className='background' >
        <h1>Stars Aligned</h1>
        <nav className="tabs">
          <Link to="/" className="tab">Home</Link>
          <Link to="/about" className="tab">About</Link>
          <Link to="/contact" className="tab">Contact</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};


export default App;




// const [inputValue, setInputValue] = useState<string>(''); // Type the state value

// const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//   setInputValue(event.target.value); // Type the event for input change
// };

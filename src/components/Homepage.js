import './styles/Homepage.css';
import { useState } from 'react';
import { Navbar } from './Navbar';
import { Title } from './Title';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { About } from './About';
import { Events } from './Events';
import { Team } from './Team';

export const Homepage = () => {
  const [isDark, setIsDark] = useState(false);

  const switchMode = () => {
    setIsDark(!isDark);
  };

  return (
    <>
      <Router>
        <div
          className={isDark ? 'section-a-dark' : 'section-a'}
          style={{ height: 'auto', minHeight: '100vh' }}
        >
          <Navbar switchColorFn={switchMode} isDark={isDark} />
          <Routes>
            <Route path="/" element={<Title isDark={isDark} />} />
            <Route path="/home" element={<Title isDark={isDark} />} />
            <Route path="/events" element={<Events isDark={isDark} />} />
            <Route path="/team" element={<Team isDark={isDark} />} />
            <Route path="/about" element={<About isDark={isDark} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

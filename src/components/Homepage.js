import './styles/Homepage.css';
import { useState } from 'react';
import { Navbar } from './Navbar';
import { Title } from './Title';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export const Homepage = () => {
  // eslint-disable-next-line
  const [isDark, setIsDark] = useState(false);

  const switchMode = () => {
    setIsDark(!isDark);
  };

  return (
    <>
      <Router>
        <div
          className={isDark ? 'section-a-dark' : 'section-a'}
          style={{ height: '100vh' }}
        >
          <Navbar switchColorFn={switchMode} isDark={isDark} />
          <Routes>
            <Route path="/" element={<Title isDark={isDark} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

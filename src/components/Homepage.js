import './styles/Homepage.css';
import { useState } from 'react';
import { Navbar } from './Navbar';
import { Title } from './Title';

export const Homepage = () => {
  // eslint-disable-next-line
  const [isDark, setIsDark] = useState(true);

  const switchMode = () => {
    // setIsDark(!isDark);
    // console.log(isDark);
  };

  return (
    <>
      <div className={isDark ? 'section-a-dark' : 'section-a'}>
        <Navbar switchColorFn={switchMode} />
        <Title />
      </div>
    </>
  );
};

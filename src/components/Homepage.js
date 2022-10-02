import { Navbar } from './Navbar';
import { Title } from './Title';

export const Homepage = () => {
  return (
    <>
      <div style={{ marginBottom: '20px' }}>
        <Navbar />
      </div>
      <Title />
    </>
  );
};

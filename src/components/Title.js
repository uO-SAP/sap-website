import './styles/Title.css';
import sapImage from '../res/sap-logo.svg';

export const Title = () => {
  return (
    <>
      {/* SAP Logo */}
      <img height={'350vh'} src={sapImage} alt="Sap Logo" />

      {/* Title text */}
      <h1 style={{ fontWeight: 'normal', fontSize: '48px', color: '#545454' }}>
        Student Assistance Program
      </h1>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'center',
        }}
      >
        <h3
          style={{
            fontWeight: 'normal',
            fontSize: '24px',
            color: '#545454',
            width: '900px',
          }}
        >
          An uOttawa club aiming towards helping students in their educational
          interests and overall welfare, and providing aid to our local
          community.
        </h3>
      </div>
      <h5 style={{ fontWeight: 'normal', color: '#545454', marginTop: '40px' }}>
        <span style={{ fontStyle: 'italic', fontSize: '16px' }}>
          Website currently being built{' '}
        </span>{' '}
        <span style={{ fontSize: '24px' }}>😎</span>
      </h5>
    </>
  );
};

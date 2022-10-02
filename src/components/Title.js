import sapImage from '../res/sap-logo.svg';

export const Title = () => {
  return (
    <>
      {/* SAP Logo */}
      <img height={'400vh'} src={sapImage} alt="Sap Logo" />

      {/* Title text */}
      <h1 style={{ fontWeight: 'normal', fontSize: '54px', color: '#545454' }}>
        Student Assistance Program
      </h1>
      <h3 style={{ fontWeight: 'normal', fontSize: '24px', color: '#545454' }}>
        Official uOttawa Club
      </h3>
    </>
  );
};

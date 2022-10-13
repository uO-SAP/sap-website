import sapPoster from '../res/sap-poster.png';

export const About = () => {
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div
          style={{
            margin: '4vh',
            marginLeft: '10vh',
            border: '0px black solid',
            borderRadius: '6px',
            overflow: 'hidden',
            height: '70vh',
          }}
        >
          <img
            src={sapPoster}
            alt="SAP Poster"
            height={'100%'}
            width={'auto'}
          />
        </div>
        <div
          style={{
            margin: '4vh',
            marginLeft: '5vh',
            border: '0px black solid',
            borderRadius: '6px',
            overflow: 'hidden',
            height: '70vh',
          }}
        >
          About us
        </div>
      </div>
    </>
  );
};

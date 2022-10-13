export const Events = (props) => {
  const events = [];

  return (
    <>
      {/* {!!(events.length === 0)} */}
      {/* {events.length === 0 ?? ( */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          fontStyle: 'italic',
          height: '60vh',
        }}
      >
        <div
          style={{
            border: '2px black solid',
            borderRadius: '4px',
            width: '400px',
            padding: '20px',
            color: props.isDark ? '#f3f3f3' : '#545454',
            borderColor: props.isDark ? '#f3f3f3' : '#545454',
          }}
        >
          No events at the moment, make sure to continue checking this page for
          updates!
        </div>
      </div>
      {/* )} */}
    </>
  );
};

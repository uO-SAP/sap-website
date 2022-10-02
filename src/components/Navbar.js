export const Navbar = () => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          padding: '10px',
          justifyContent: 'space-between',
          background: '#DDD'
          // width: '100%'
        }}
      >
        <div style={{ textAlign: 'start' }}>Navbar placeholder</div>

        {/* Replace these with buttons: first with dropdown, second with toggle */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            textAlign: 'end',
          }}
        >
          <div style={{ marginRight: '10px' }}>Darkmode</div>
          <div>Language</div>
        </div>
      </div>
      {/* Make sure this is aligned appropriately */}
      <div style={{ textAlign: 'end', padding: '10px' }}>Join our discord!</div>
    </>
  );
};

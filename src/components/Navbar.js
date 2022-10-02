export const Navbar = () => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          padding: '10px',
        }}
      >
        <div style={{ width: '100%', textAlign: 'start' }}>
          Navbar placeholder
        </div>

        {/* Make sure this is aligned appropriately */}
        <div>Join our discord!</div>

        {/* Replace these with buttons: first with dropdown, second with toggle */}
        <div
          style={{ display: 'flex', flexDirection: 'row', textAlign: 'end' }}
        >
          <div style={{ marginRight: '10px' }}>Darkmode</div>
          <div>Language</div>
        </div>
      </div>
    </>
  );
};

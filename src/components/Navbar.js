import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';

export const Navbar = () => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          padding: '10px',
          paddingTop: '20px',
          paddingInline: '20px',
          justifyContent: 'space-between',
          background: '#FFF',
        }}
      >
        <div
          style={{
            textAlign: 'start',
            display: 'flex',
            flexDirection: 'row',
            gap: '20px',
          }}
        >
          <div style={{ fontWeight: '500' }}>Home</div>
          <div style={{ fontWeight: '500' }}>Events</div>
          <div style={{ fontWeight: '500' }}>Posts</div>
          <div style={{ fontWeight: '500' }}>The Team</div>
          <div style={{ fontWeight: '500' }}>FAQ</div>
        </div>

        {/* Replace these with buttons: first with dropdown, second with toggle */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            textAlign: 'end',
          }}
        >
          <div
            style={{
              marginRight: '10px',
              borderRadius: '4px',
              border: 'black 1px solid',
              padding: '10px',
            }}
          >
            Darkmode
          </div>
          <div
            style={{
              borderRadius: '4px',
              border: 'black 1px solid',
              padding: '10px',
            }}
          >
            EN/FR
          </div>
        </div>
      </div>
      {/* Make sure this is aligned appropriately */}
      <div style={{ textAlign: 'end', padding: '10px', paddingRight: '20px' }}>
        <a
          href="https://discord.gg/PnQ399XKak"
          style={{
            textDecoration: 'none',
            color: '#FFFFFF',
            borderRadius: '4px',
            border: 'black 0px solid',
            padding: '10px',
            background: '#7289da',
          }}
        >
          <FontAwesomeIcon icon={faDiscord} /> Join our discord!
        </a>
      </div>
    </>
  );
};

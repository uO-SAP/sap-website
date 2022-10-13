import './styles/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';

import { Tooltip, FormGroup, FormControlLabel, Switch } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

export const Navbar = (props) => {
  // Light/night mode switch
  // https://mui.com/material-ui/react-switch/
  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
      margin: 1,
      padding: 0,
      transform: 'translateX(6px)',
      '&.Mui-checked': {
        color: '#fff',
        transform: 'translateX(22px)',
        '& .MuiSwitch-thumb:before': {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            '#fff'
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor:
            theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
      width: 32,
      height: 32,
      '&:before': {
        content: "''",
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff'
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
    },
    '& .MuiSwitch-track': {
      opacity: 1,
      backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      borderRadius: 20 / 2,
    },
  }));

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
          <Link
            className="navbar-button"
            to="/home"
            style={{ color: props.isDark ? '#f3f3f3' : '#545454' }}
          >
            Home
          </Link>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
            <div>
              <Tooltip title="Coming soon!" arrow>
                <Link
                  className="navbar-button"
                  to="/events"
                  style={{ color: props.isDark ? '#f3f3f3' : '#545454' }}
                >
                  Events
                </Link>
              </Tooltip>
            </div>
            <div className="navbar-button">
              <Tooltip title="Coming soon!" arrow>
                <Link
                  className="navbar-button"
                  to="/team"
                  style={{ color: props.isDark ? '#f3f3f3' : '#545454' }}
                >
                  The team
                </Link>
              </Tooltip>
            </div>
            <Link
              className="navbar-button"
              to="/about"
              style={{ color: props.isDark ? '#f3f3f3' : '#545454' }}
            >
              About us
            </Link>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            textAlign: 'end',
          }}
        >
          <div style={{ marginRight: '0px' }}>
            <FormGroup>
              <FormControlLabel
                value={true}
                control={
                  <MaterialUISwitch
                    sx={{ m: 1 }}
                    defaultChecked={props.isDark}
                    onChange={() => props.switchColorFn()}
                  />
                }
              />
            </FormGroup>
          </div>
          <Tooltip title="Coming soon!" arrow>
            <div
              style={{
                borderRadius: '4px',
                height: '40px',
                width: '40px',
                border: 'black 2px solid',
                display: 'flex',
                textAlign: 'center',
                justifyContent: 'center',
                alignContent: 'center',
                flexDirection: 'column',
                fontSize: '16px',
                fontWeight: '700',
                cursor: 'pointer',
                color: props.isDark ? '#f3f3f3' : '#545454',
                borderColor: props.isDark ? '#f3f3f3' : '#545454',
              }}
            >
              FR
            </div>
          </Tooltip>
        </div>
      </div>
      {/* Make sure this is aligned appropriately */}
      <div style={{ textAlign: 'end', padding: '10px', paddingRight: '20px' }}>
        <a
          href="https://discord.gg/PnQ399XKak"
          target="_blank"
          rel="noopener noreferrer"
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

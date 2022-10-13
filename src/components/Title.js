import './styles/Title.css';
import sapImage from '../res/sap-logo.svg';
import sapImageDark from '../res/sap-logo-dark.svg';
import { TypeAnimation } from 'react-type-animation';
import FadeIn from 'react-fade-in';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Title = (props) => {
  const [isEnglish, setIsEnglish] = useState(true);

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          textAlign: 'center',
          height: '60vh',
          marginTop: '5vh',
        }}
      >
        {/* SAP Logo */}
        <div
          style={{
            textAlign: 'right',
            paddingRight: '8vh',
            marginRight: '8vh',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'end',
            alignItems: 'center',
            borderRight: '0.5vh #545454 dashed',
            borderColor: props.isDark ? '#f3f3f3' : '#545454',
          }}
        >
          <img
            height={'90%'}
            width={'auto'}
            src={props.isDark ? sapImageDark : sapImage}
            alt="Sap Logo"
          />
        </div>

        {/* Title text section */}
        <div
          style={{
            width: '40vw',
            marginRight: '5vw',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'left',
          }}
        >
          <div
            style={{
              fontWeight: 'normal',
              color: props.isDark ? '#f3f3f3' : '#545454',
            }}
          >
            <TypeAnimation
              sequence={[
                'S',
                100,
                'Student',
                600, // Waits 1s
                'Student Assistance',
                600, // Waits 2s
                'Student Assistance Program',
                3000, // Waits 3s
                () => {
                  setIsEnglish(false);
                },
                'P',
                100,
                'Programme',
                600, // Waits 1s
                "Programme d'aide",
                600, // Waits 2s
                "Programme d'aide aux étudiants",
                3000, // Waits 3s
                () => {
                  console.log('Done typing!'); // Place optional callbacks anywhere in the array
                  setIsEnglish(true);
                },
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: '5vh' }}
            />
          </div>
          <div>
            <h3
              style={{
                fontWeight: 'normal',
                fontSize: '3vh',
                color: props.isDark ? '#f3f3f3' : '#545454',
              }}
            >
              {isEnglish && (
                <FadeIn>
                  <div>
                    An uOttawa club aiming towards helping students in their
                    educational interests and overall welfare, and providing aid
                    to our local community.
                    <div
                      style={{
                        marginTop: '5vh',
                      }}
                    >
                      <Link
                        to="/"
                        style={{
                          textDecoration: 'none',
                          border: '0.3vh solid black',
                          borderRadius: '4px',
                          color: props.isDark ? '#f3f3f3' : '#545454',
                          borderColor: props.isDark ? '#f3f3f3' : '#545454',
                          padding: '0.6vh',
                          paddingInline: '1.0vh',
                          fontSize: '2.5vh',
                        }}
                      >
                        Learn more
                      </Link>
                    </div>
                  </div>
                </FadeIn>
              )}
              {!isEnglish && (
                <FadeIn>
                  <div>
                    Un club étudiant à uOttawa qui vise à aider les étudiants
                    dans leurs intérêts éducatifs et leur bien-être général.
                    Nous apportons aussi de l'aide à notre communauté locale!
                    <div
                      style={{
                        marginTop: '5vh',
                      }}
                    >
                      <Link
                        to="/"
                        style={{
                          textDecoration: 'none',
                          border: '0.3vh solid black',
                          borderRadius: '4px',
                          color: props.isDark ? '#f3f3f3' : '#545454',
                          borderColor: props.isDark ? '#f3f3f3' : '#545454',
                          padding: '0.6vh',
                          paddingInline: '1.0vh',
                          fontSize: '2.5vh',
                        }}
                      >
                        En savoir plus
                      </Link>
                    </div>
                  </div>
                </FadeIn>
              )}
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

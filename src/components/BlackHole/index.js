import React from 'react';
import IntroText from './animations/IntroText';
import { useTheme } from '../../utils/ThemeContext';

export default function BlackHole() {
  
  const { darkTheme } = useTheme();

  const styles = {
    container: {
      margin: 0,
      alignItems: 'center',
      height: '30rem',
      justifyContent: 'center',
      display: 'flex',
      background: darkTheme
        ? '#090A22'
        : '#f4f4d7',
    },
    rowCircle: {
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',
    },
    circle: {
      height: '17.5rem',
      width: '17.5rem',
      borderRadius: '50%',
      textAlign: 'center',
      justifyContent: 'center',
      fontSize: '1.15rem',
      position: 'absolute',
      zIndex: 5,
      background: darkTheme
        ? '#0d0d0d'
        : '#f4f4d7',
      color: darkTheme
        ? '#fff'
        : '#090A22',
      boxShadow: darkTheme
        ? '0 0 17px 8px #b4318d , 0 0 46px 28px #d35fb0 , 0 0 50px 35px #090A22'
        : '0 0 17px 8px #140510 , 0 0 46px 28px #581845 , 0 0 50px 35px #140510',
    },
  }

  return (
    <div className='container-fluid' style={styles.container}>
      <div className='row' style={styles.rowCircle}>
        <div style={styles.circle}>
          <IntroText />
        </div>
      </div>
    </div>
  );
}

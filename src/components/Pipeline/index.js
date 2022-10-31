import React from 'react';
import PipelineShowcase from './Showcase';
import coneLight from '../assets/images/coneLight.png';
import coneDark from '../assets/images/coneDark.png';
import checkLight from '../assets/images/checkLight.png';
import checkDark from '../assets/images/checkDark.png';
import { useTheme } from '../../utils/ThemeContext';

export default function Pipeline() {
  
  const { darkTheme } = useTheme(); 

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
    },
    gallery: {
      background: darkTheme
        ? '#090A22'
        : '#f4f4d7'
    },
    coneLeft: {
      height: '2.5rem',
      width: '2.5rem',
      marginRight: '.5rem',
    },
    coneRight: {
      height: '2.5rem',
      width: '2.5rem',
      marginLeft: '.5rem'
    },
    check: {
      height: '3rem',
      width: '5.2rem',
      marginRight: '1rem',
    },
    constructionHead: {
      color: '#F87431',
      marginTop: '3rem',
      fontSize: '2rem'
    },
    separation: {
      color: '#c8379d',
      fontSize: '2rem',
      display: 'flex',
      justifyContent: 'center'
    }
  }

  return (
    <>
      <div className='text-center' style={styles.gallery}>
        <div className='container-fluid' style={styles.container}>
          <h3 style={styles.constructionHead}>
            <img src={darkTheme ? coneDark : coneLight} alt='construction cone' style={styles.coneLeft}></img>
              Active Projects
            <img src={darkTheme ? coneDark : coneLight} alt='construction cone' style={styles.coneRight}></img>
          </h3>
          <PipelineShowcase />
          <div className='row' style={styles.separation}>
            <img src={darkTheme ? checkDark : checkLight} alt='check mark' style={styles.check}></img>
            Published Projects
          </div>
        </div>
      </div>
    </>
  );
}
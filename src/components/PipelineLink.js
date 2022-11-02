import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import coneLight from './assets/images/coneLight.png';
import coneDark from './assets/images/coneDark.png';
import { useTheme } from '../utils/ThemeContext';

export default function PipelineLink() {
  
  const { darkTheme } = useTheme(); 

  const [isHover, setIsHover] = useState(false);
  
  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/pipeline`; 
    navigate(path);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }

  const styles = {
    row: {
      background: darkTheme
        ? '#090A22'
        : '#f4f4d7',
      display: 'flex',
      textAlign: 'center',
      paddingBottom: '3rem'
    },
    redirect: {
      color: isHover
        ? '#A53C85'
        : 'gray',
      fontSize: '20px',
      fontWeight: 'bold',
      textAlign: 'center'
    },
    cone: {
      height: '3rem',
      width: '3rem',
      marginRight: '1rem',
      marginLeft: '1rem'
    }
  }

  return (
    <div className='container-fluid'>
      <div className='row' style={styles.row}>
        <Link to='/pipeline' className='col-12'
          style={styles.redirect}
          onClick={routeChange}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img src={darkTheme ? coneDark : coneLight} alt='construction cone' style={styles.cone}></img>
          Projects coming soon...
          <img src={darkTheme ? coneDark : coneLight} alt='construction cone' style={styles.cone}></img>
        </Link>
      </div>
    </div>
  );
}
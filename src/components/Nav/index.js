import React from 'react';
import { Link } from 'react-router-dom';
import ThemeButton from '../ThemeButton';
import { useTheme } from '../../utils/ThemeContext';

export default function Nav() {

  const redirectPortfolio = () => {
    setTimeout( () =>
      document.getElementById("portfolio").scrollIntoView()
      , 150);
  };

  const redirectResume = () => {
    setTimeout( () =>
      document.getElementById("resume").scrollIntoView()
      , 150);
  };

  const redirectContact = () => {
    setTimeout( () =>
      document.getElementById("contact").scrollIntoView()
      , 150);
  };

  const { darkTheme } = useTheme();

  const styles = {
    nav: {
      background: darkTheme
        ? '#090A22'
        : '#f4f4d7',
      color: 'white',
      padding: '1rem',
      justifyContent: 'center'
    },
    name: {
      fontSize: '2rem',
      color: darkTheme
        ? '#fff'
        : '#090A22',
      textDecoration: 'none'
    },
    rowLinks: {
      display: 'flex',
      justifyContent: 'space-evenly',
      color: 'gray',
      padding: '1rem',
      textAlign: 'center'
    }
  };

  return (
    <nav className='navbar-fluid navbar-expand-xl' style={styles.nav}>
      <div className='row w-100 m-1 d-flex flex-column text-center align-items-center'>
        <div className='col-12'>
          {/* HomePage Redirect */}
          <Link to='/' style={styles.name}>
            Brett Miller
          </Link>
        </div>
      </div>
      <div className='row d-flex flex-row' style={styles.rowLinks}>
        {/* Resume */}
        <div className='col-2'>
          <Link to='/' className='nav-link' onClick={redirectResume}>
            Resum&eacute;
          </Link>
        </div>
          
        {/* GitHub */}
        <div className='col-2'>
          <a className='nav-link' href='https://github.com/brettmiller47' target='_blank' rel="noreferrer">
            GitHub
          </a>
        </div>
          
        {/* Portfolio */}
        <div className='col-2'>
          <Link to='/' className='nav-link' onClick={redirectPortfolio}>
            Portfolio
          </Link>
        </div>
          
        {/* Contact */}
        <div className='col-2'>
          <Link className='nav-link' onClick={redirectContact}>
            Contact
          </Link>
        </div>
          
        <div className='col-2'>
          <ThemeButton />
        </div>
          
      </div>
    </nav>
  );
}
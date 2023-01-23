import React from 'react';
import { useTheme } from '../../utils/ThemeContext';
import githubLight from '../assets/images/githubLight.png';
import githubDark from '../assets/images/githubDark.png';

export default function Footer() {
  
  const { darkTheme } = useTheme();

  const styles = {
    footer: {
      background: darkTheme
        ? '#090A22'
        : '#f4f4d7',
      color: 'white',
    }
  }

  return (
    <div className='container-fluid d-flex justify-content-center' style={styles.footer}>
      <a href='https://github.com/brettmiller47' target='_blank' rel='noreferrer' className='m-2 p-0'>
        <img src={darkTheme ? githubDark : githubLight} alt='GitHub logo' height='64px'></img>
      </a>
    </div>
  );
}
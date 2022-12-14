import React from 'react';
import resume from '../assets/resume.pdf';
import { useTheme } from '../../utils/ThemeContext';


export default function Button() {
  
  const { darkTheme } = useTheme();

  const styles = {
    buttonLink: {
      width: '13.4rem',
    },
    button: {
      background: darkTheme
        ? '#FF4DA6'
        : '#A53C85',
      color: darkTheme
        ? '#01022d'
        : '#f4f4d7',
      fontWeight: 'bold'
    }
  };

  return (
    <div className='row d-flex pt-2 justify-content-center'>
      <a className='m-3' style={styles.buttonLink} href={resume} target='_blank' rel='noreferrer' download='Brett Miller - Resume'>
        <button id='resumeBtn' type='button' className='btn w-100' style={styles.button}>
          <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' className='bi bi-download' viewBox='0 0 16 16'>
            <path d='M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z'></path>
            <path d='M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z'></path>
          </svg>
          &nbsp;Download Resum&eacute;
        </button>
      </a>
    </div>  
  );
}
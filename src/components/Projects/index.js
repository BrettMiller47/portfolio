import React from 'react';
import ProjectShowcase from './Showcase';
import { useTheme } from '../../utils/ThemeContext';

export default function Projects() {

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
  };

  return (
    <div className='text-center' style={styles.gallery}>
      <div className='container-fluid' style={styles.container}>
        <ProjectShowcase />
      </div>
    </div>
  );
}

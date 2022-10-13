import React from 'react';
import { useTheme } from '../../utils/ThemeContext';
import Card from './Card';

export default function Contact() {
  
  const { darkTheme } = useTheme();
  
  const styles = {
    gallery: {
      background: darkTheme
        ? '#090A22'
        : '#f4f4d7'
    }
  }

  return (
    <div className='text-center' style={styles.gallery}>
      <Card />
    </div>
  );
}
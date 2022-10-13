import React from 'react';
import { useTheme } from '../../utils/ThemeContext';

export default function ThemeButton() {

  const { toggleTheme } = useTheme();

  return (
    <a href='/' onClick={toggleTheme} className='nav-link'>
      Theme
    </a>
  );
}

import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../utils/ThemeContext';

export default function Nav() {

  const redirectPortfolio = () => {
    setTimeout( () =>
      document.getElementById("portfolioCards").scrollIntoView()
      , 150);
  };

  const redirectResume = () => {
    setTimeout( () =>
      document.getElementById("resumeBtn").scrollIntoView()
      , 150);
  };

  const redirectContact = () => {
    setTimeout( () =>
      document.getElementById("contactForm").scrollIntoView()
      , 150);
  };

  const { darkTheme } = useTheme();
  const { toggleTheme } = useTheme();

  useEffect(() => {
    let faviconEl = document.getElementById('favicon');
    darkTheme
      ? faviconEl.href = 'portfolio/faviconDark.png'
      : faviconEl.href = 'portfolio/faviconLight.png'
  });


  const [isHoverName, setIsHoverName] = useState(false); 
  const [isHoverResume, setIsHoverResume] = useState(false); 
  const [isHoverGithub, setIsHoverGithub] = useState(false); 
  const [isHoverPortfolio, setIsHoverPortfolio] = useState(false); 
  const [isHoverContact, setIsHoverContact] = useState(false); 
  const [isHoverTheme, setIsHoverTheme] = useState(false); 
  
  const handleMouseEnter = (e) => {
    let id = e.target.id;
    switch (id) {
      case 'name':
        setIsHoverName(true);
        break;
      case 'resume':
        console.log('resume')
        setIsHoverResume(true);
        break;
      case 'github':
        setIsHoverGithub(true);
        break;
      case 'portfolio':
        setIsHoverPortfolio(true);
        break;
      case 'contact':
        setIsHoverContact(true);
        break; 
      case 'theme':
        setIsHoverTheme(true);
        break;
      default:
        console.log('No id associated with onMouseEnter action!');
        break;
    }
  };

  const handleMouseLeave = (e) => {
    let id = e.target.id;
    switch (id) {
      case 'name':
        setIsHoverName(false);
        break;
      case 'resume':
        console.log('resume')
        setIsHoverResume(false);
        break;
      case 'github':
        setIsHoverGithub(false);
        break;
      case 'portfolio':
        setIsHoverPortfolio(false);
        break;
      case 'contact':
        setIsHoverContact(false);
        break; 
      case 'theme':
        setIsHoverTheme(false);
        break;
      default:
        console.log('No id associated with onMouseLeave action!');
        break;
    }
  };

  const highlight = '#A53C85';
  const noHighlight = 'gray';

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
        ? (isHoverName
            ? highlight
            : '#fff'
          )
        : (isHoverName
            ? highlight
            : '#090A22'
          ),
      textDecoration: 'none'
    },
    links: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      padding: '.5rem',
      textAlign: 'center',
    },
    link: {
      width: 'max-content',
      padding: '2px'
    },
    resume: {
      color: isHoverResume
        ? highlight
        : noHighlight
    },
    github: {
      color: isHoverGithub
        ? highlight
        : noHighlight
    },
    portfolio: {
      color: isHoverPortfolio
        ? highlight
        : noHighlight
    },
    contact: {
      color: isHoverContact
        ? highlight
        : noHighlight
    },
    theme: {
      color: isHoverTheme
        ? highlight
        : noHighlight
    }
  };

  return (
    <nav className='navbar-fluid navbar-expand-xl' style={styles.nav}>
      <div className='row w-100 m-1 d-flex flex-column text-center align-items-center'>
        <div className='col-12'>
          {/* HomePage Redirect */}
          <Link to='/portfolio' style={styles.name}
            id="name"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Brett Miller
          </Link>
        </div>
      </div>
      <div className='container' style={styles.links}>
        {/* Resume */}
        <div style={styles.link}>
          <Link to='/portfolio' className='nav-link'
            id='resume'
            style={styles.resume}
            onClick={redirectResume}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Resum&eacute;
          </Link>
        </div>
          
        {/* GitHub */}
        <div style={styles.link}>
          <a className='nav-link' href='https://github.com/brettmiller47' target='_blank' rel="noreferrer"
            id='github'
            style={styles.github}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            GitHub
          </a>
        </div>
          
        {/* Portfolio */}
        <div style={styles.link}>
          <Link to='/portfolio' className='nav-link'
            id='portfolio'
            style={styles.portfolio}
            onClick={redirectPortfolio}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Portfolio
          </Link>
        </div>
          
        {/* Contact */}
        <div style={styles.link}>
          <Link className='nav-link'
            id='contact'
            style={styles.contact}
            onClick={redirectContact}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Contact
          </Link>
        </div>
          
        <div style={styles.link}>
          <a href='/' className='nav-link'
            id='theme'
            style={styles.theme}
            onClick={toggleTheme}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <svg  style={styles.theme} stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
          </a>
        </div>

      </div>
    </nav>
  );
}
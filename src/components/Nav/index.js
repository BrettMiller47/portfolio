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
      ? faviconEl.href = 'portfolio/faviconDark.ico'
      : faviconEl.href = 'portfolio/faviconLight.ico'
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

  const highlight = '#f77fbe';
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
      justifyContent: 'space-evenly',
      padding: '.5rem',
      textAlign: 'center',
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
      <div className='row d-flex flex-row' style={styles.links}>
        {/* Resume */}
        <div className='col-2'>
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
        <div className='col-2'>
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
        <div className='col-2'>
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
        <div className='col-2'>
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
          
        <div className='col-2'>
          <a href='/' className='nav-link'
            id='theme'
            style={styles.theme}
            onClick={toggleTheme}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Theme
          </a>
        </div>
          
      </div>
    </nav>
  );
}
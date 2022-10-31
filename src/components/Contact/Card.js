import React from 'react';
import { useTheme } from '../../utils/ThemeContext';

export default function Card() {

  const { darkTheme } = useTheme();

  // ---- EMAIL VALIDATION ----
  // const [email, setEmail] = useState('');
  // const [error, setError] = useState(null);

  // function isValidEmail(email) {
  //   if (email.length === 0) {
  //     return true;
  //   }
  //   return /\S+@\S+\.\S+/.test(email);
  // }

  // const handleChange = event => {
  //   if (!isValidEmail(event.target.value)) {
  //     setError('Email is invalid');
  //   } else {
  //     setError(null);
  //   }

  //   setEmail(event.target.value);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    let name = document.getElementById('name').textContent;
    let subject = 'CONTACT FORM message from ' + name;
    let body = document.getElementById('body').textContent;
    window.location.href = 'mailto:brett.miller47@yahoo.com?subject=' + subject + '&body=' + body;
    document.getElementById('contact-form').reset();
  }
  // ----  ----

  const styles = {
    container: {
      background: '#f4f4d7',
    },
    form: {
      boxShadow: darkTheme
        ? `1px 1px 10px #c2c2a3`
        : `1px 1px 10px #581845`,
      margin: '1.5rem',
      display: 'flex',
      flexDirection: 'column',
      background: darkTheme
        ? '#090A22'
        : '#e0e0d1',
      width: '400px',
      justifyItems: 'center',
      padding: '2rem',
      color: darkTheme
        ? '#f4f4d7'
        : '#000'
    },
    header: {
      color: darkTheme
        ? `#f4f4d7`
        : '#581845',
      fontSize: '2rem',
      margin: '1rem',
    },
    button: {
      background: darkTheme
        ? '#2793F1'
        : '#581845',
      color: darkTheme
        ? '#fff'
        : '#f4f4d7',
      width: '33%',
      marginTop: '2rem',
      textDecoration: 'none'
    },
    message: {
      height: '50px'
    },
    label: {
      fontSize: '1.3rem'
    },
    input: {
      color: '#581845'
    },
    inputError: {
      background: '#ffbaba',
      border: 'red solid 1.5px'
    }
  };

  return (
    <div className='row d-flex w-100 justify-content-center'>
      <h3 id='contactForm' style={styles.header}>Contact Form</h3>
      <form id='contact-form' style={styles.form}>
        <label style={styles.label} className="sr-only" >Name</label>
        <input id='name' style={styles.input} type="text" className="form-control mb-2" placeholder="Jane Doe"></input>

        {/* <label style={styles.label} className="sr-only" >Email</label>
        <input
          id="email"
          name="email"
          value={email}
          onChange={handleChange}
          style={error ? styles.inputError : styles.input} type="text" className="form-control mb-2" placeholder="janedoe@email.com">  
        </input>
        {error && <h5 style={{color: 'red'}}>{error}</h5>} */}

        <label style={styles.label} >Message</label>
        <textarea id='body' style={styles.input} className="form-control mb-2" rows="3" placeholder='Hi Brett, I really liked your website!'></textarea>
        
        <div className='justify-content-center'>
          <button type="submit" className='btn' style={styles.button} onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
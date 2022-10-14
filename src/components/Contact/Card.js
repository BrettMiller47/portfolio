import React from 'react';
import { useTheme } from '../../utils/ThemeContext';

export default function Card() {

  const { darkTheme } = useTheme();

  const handleSubmit = (e) => {
    e.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    document.getElementById('contact-form').reset();
    console.log(name + email + message);
  }

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
        ? '#2095ac'
        : '#581845',
      color: darkTheme
        ? '#fff'
        : '#f4f4d7',
      width: '33%',
      marginTop: '2rem',
    },
    message: {
      height: '50px'
    },
    label: {
      fontSize: '1.3rem'
    },
    input: {
      color: '#581845'
    }
  };

  return (
    <div class='row d-flex w-100 justify-content-center'>
      <h3 id='contact' style={styles.header}>Contact Form</h3>
      <form id='contact-form' style={styles.form}>
        <label style={styles.label} className="sr-only" >Name</label>
        <input style={styles.input} type="text" className="form-control mb-2" id="name" placeholder="Jane Doe"></input>

        <label style={styles.label} className="sr-only" >Email</label>
        <input style={styles.input} type="text" className="form-control mb-2" id="email" placeholder="janedoe@email.com"></input>

        <label style={styles.label} >Message</label>
        <textarea style={styles.input} className="form-control mb-2" id="message" rows="3" placeholder='Hi Brett, I really liked your website!'></textarea>
        
        <div className='justify-content-center'>
          <button type="submit" className='btn' style={styles.button} onClick={handleSubmit}>Submit</button>
        </div>
      </form>
    </div>
  );
}
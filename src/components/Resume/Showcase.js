import React from 'react';
import { useTheme } from '../../utils/ThemeContext';

export default function ResumeShowcase() {
  
  const featuredRows = [
    {
      title: "Full Stack Web Development",
      summary: "University of Denver",
      listItems: [
        " - Git",
        " - MERN",
        " - MongoDB and MySQL",
        " - Agile and Computer Science",
        " - HTML5, CSS3, JavaScript, jQuery",
      ]
    },
    {
      title: "Danaher's Operations Leadership Program",
      summary: "A two-year rotational program involving:",
      listItems: [
        " - Supervision",
        " - VBA programming",
        " - Fostering teamwork",
        " - Actionable data analysis",
        " - Root-cause problem solving",
      ]
    },
    {
      title: "Bachelor's in Supply Chain & Information Systems",
      summary: "Penn State University",
      listItems: [
        " - 3.6 GPA",
        " - Certificate in Real Estate Analysis",
      ]
    },
  ];

  const { darkTheme } = useTheme();

// || #d35fb0 ||
  const styles = {
    row: {
      boxShadow: darkTheme
        ? '0px 0px 9px rgba(211,95,176)'
        : '0px 0px 9px #e60073',
      background: darkTheme
        ? 'linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(2,2,45,1) 40%, rgba(211,95,176,.7) 100%)'
        : 'linear-gradient(180deg, rgba(88,24,69,1) 0%, rgba(2,2,45,1) 50%, rgba(2,2,45,1) 100%)',
      alignItems: 'center',
      justifyContent: 'center',
    }, 
    header: {
      textAlign: 'center',
      margin: 0,
      padding: 0,
      fontSize: '1.7rem',
      color: '#fafaeb'
    },
    summary: {
      textAlign: 'center',
      marginTop: '3px',
      marginBottom: '8px',
      color: '#d35fb0',
      fontStyle: 'italic',
      fontSize: '1.2rem'
    },
    list: {
      listStyleType: 'none',
      textAlign: 'left',
      margin: 0,
      padding: 0,
      color: '#fff',
      fontSize: '1rem'
    }
  };

  return (
    <>
      {featuredRows.map((row) => (
        <div className='row mx-5 my-4 p-2' style={styles.row} key={row.title}>
          <div className='col-lg-4'>
            <h5 style={styles.header}>{row.title}</h5>
            <p style={styles.summary}>{row.summary}</p>
          </div>
          <div className='col-md-12 col-lg-4 text-left'>
            <ul style={styles.list}>
              {row.listItems.map((listItem) => (
                <li key={listItem}>{listItem}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
    );
}
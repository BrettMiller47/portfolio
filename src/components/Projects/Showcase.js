import React from 'react';
import Card from '../Card/index';
import arbPic from '../assets/images/arb.png';
import arbArticle from '../assets/images/arb-article.png';
import workforceGif from '../assets/videos/workforceManager.gif';
import beantownGif from '../assets/videos/beantown.gif';
import pourLoserPic from '../assets/images/pour-loser.png';
import scraperPic from '../assets/images/command-line-scraper.png'

export default function ProjectShowcase() {

  const cards = [
    {
      header: 'MySQL Workforce Manager',
      desc: 'A command-line application using Sequelize.',
      imgSrc: workforceGif,
      iFrameSrc: '',
      iFrameTitle: 'MySQL Workforce Manager',
      projectSrc: 'https://github.com/BrettMiller47/sql-employee-tracker'
    },
    {
      header: 'Excel VBA Automation',
      desc: 'A "How To..." video for teaching purposes.',
      imgSrc: '',
      iFrameSrc: 'https://www.youtube.com/embed/OJUpHsvbuKg',
      iFrameTitle: 'VBA - Automate data gathering across multiple files',
      projectSrc: 'https://github.com/BrettMiller47/vba-gathering-data-across-multiple-files'
    },
    {
      header: 'Excel Solver',
      desc: 'A case study for optimizing trucking routes.',
      imgSrc: beantownGif,
      iFrameSrc: '',
      iFrameTitle: 'A case study for optimizing trucking routes.',
      projectSrc: 'https://github.com/BrettMiller47/beantown'
    },
    {
      header: 'Sportsbook Arbitrage',
      desc: 'A guide to extract a 21.76% risk-free yield from new user promos.',
      imgSrc: arbArticle,
      iFrameSrc: '',
      iFrameTitle: '',
      projectSrc: 'https://brettmiller47.github.io/new-user-arbitrage/'
    },
    {
      header: 'Pour Loser',
      desc: 'A Jeopardy trivia game using jService API.',
      imgSrc: pourLoserPic,
      iFrameSrc: '',
      iFrameTitle: '',
      projectSrc: 'https://github.com/TateFoster/pour-loser-game'
    },
    {
      header: 'Optimal Fantasy Lineups',
      desc: 'A Selenium tool for web-scraping JSON data.',
      imgSrc: scraperPic,
      iFrameSrc: '',
      iFrameTitle: '',
      projectSrc: 'https://github.com/BrettMiller47/cli-optimal-fantasy-lineups'
    },
    {
      header: 'Arbitrage Calculator',
      desc: 'A python tool for evaluating arbitrage scenarios.',
      imgSrc: arbPic,
      iFrameSrc: '',
      iFrameTitle: '',
      projectSrc: 'https://github.com/BrettMiller47/Arb'
    },
  ];
  
  return (
    <div id='portfolioCards' className='row align-items-center justify-content-center mx-2 my-3 p-2'>
      {cards.map((card) => ( 
        <Card
          header={card.header}
          desc={card.desc}
          imgSrc={card.imgSrc}
          iFrameSrc={card.iFrameSrc}
          iFrameTitle={card.iFrameTitle}
          projectSrc={card.projectSrc}
          key={card.header}
        />        
      ))}
    </div>
  );
}
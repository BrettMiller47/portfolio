import React from 'react';
import Card from '../Card/index';
import arbPic from '../assets/images/arb.png'

export default function ProjectShowcase() {

  const cards = [
    {
      header: 'Excel VBA Automation',
      desc: 'A "How To..." video for teaching purposes.',
      imgSrc: '',
      iFrameSrc: 'https://www.youtube.com/embed/OJUpHsvbuKg',
      iFrameTitle: 'VBA - Automate data gathering across multiple files',
      projectSrc: 'https://github.com/BrettMiller47/vba-gathering-data-across-multiple-files'
    },
    {
      header: 'Python Calculator',
      desc: 'An arbitrage tool for sports betting.',
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
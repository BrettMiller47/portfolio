import React from 'react';
import Card from '../Card/index';
import githubAltLogo from '../assets/images/githubAltLogo.webp';
import mernLogo from '../assets/images/mernLogo.png';
import seleniumLogo from '../assets/images/seleniumLogo.png';

export default function PipelineShowcase() {
  
  const cards = [
    {
      header: 'Authentication Gist',
      desc: "A gist is on the way!  It's time I took a dive into the deep end of token authentication.  As I learn I'll update my gist.",
      imgSrc: githubAltLogo,
      iFrameSrc: '',
      iFrameTitle: '',
      projectSrc: ''
    },
    {
      header: 'Level House',
      desc: "The future of sports futures. The best odds and a multi-wager combinator for level payouts.  It's about time we even the odds!",
      imgSrc: mernLogo,
      iFrameSrc: '',
      iFrameTitle: '',
      projectSrc: ''
    },
    {
      header: 'FFS! (Fantasy Football Slouch)',
      desc: 'Every fantasy manager makes bad roster decisions, but who in your league makes the most?',
      imgSrc: seleniumLogo,
      iFrameSrc: '',
      iFrameTitle: '',
      projectSrc: ''
    },
  ];
  
  return (
    <div id='portfolio' className='row align-items-center justify-content-center mx-2 my-3 p-2'>
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
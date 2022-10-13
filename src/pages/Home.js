import React from 'react';
import BlackHole from '../components/BlackHole/index';
import Resume from '../components/Resume/index';
import Projects from '../components/Projects/index'
import PipelineLink from '../components/Pipeline/Link';

export default function Home() {

  return (
    <main>
      <BlackHole />
      <Resume />
      <Projects />
      <PipelineLink />
    </main>
  );
};

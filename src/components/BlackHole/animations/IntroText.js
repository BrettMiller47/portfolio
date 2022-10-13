import React from 'react';
import styled, {keyframes} from 'styled-components';
import { useTheme } from '../../../utils/ThemeContext';

export default function IntroText() {

  const { darkTheme } = useTheme();

  const styles = {
    highlight: {
      color: darkTheme 
        ? '#2095ac'
        : '#e60073',
    fontWeight: 'bold'
    }
  };

  return (
    <>
      <br></br>
      <Hello >
        Hello,
        <Intro style={styles.highlight}>
          &nbsp;I'm Brett.
        </Intro>
      </Hello>
      <br></br>
      <br></br>
      <Ask>
        Got a problem?
        <Respond style={styles.highlight}>
          &nbsp;&nbsp;Let's work together to craft a solution.
        </Respond>
      </Ask>
      <br></br>
      <br></br>
      <Checkout>
        Check out my portfolio to see how I can help!
      </Checkout>
    </>
  );
}

const animation = keyframes`
  0% { opacity: 0; }
  100% { opacity:1 }
`
const Hello = styled.span`
  opacity: 0;
  animation-name: ${animation};
  animation-delay: 1s;
  animation-duration: 5s;
  animation-fill-mode: forwards;
`
const Intro = styled.span`
  opacity: 0;
  animation-name: ${animation};
  animation-delay: 2s;
  animation-duration: 5s;
  animation-fill-mode: forwards;
`
const Ask = styled.span`
  opacity: 0;
  animation-name: ${animation};
  animation-delay: 5s;
  animation-duration: 5s;
  animation-fill-mode: forwards;
`
const Respond = styled.span`
  opacity: 0;
  animation-name: ${animation};
  animation-delay: 6.7s;
  animation-duration: 5s;
  animation-fill-mode: forwards;
`
const Checkout = styled.span`
  opacity: 0;
  animation-name: ${animation};
  animation-delay: 9.9s;
  animation-duration: 5s;
  animation-fill-mode: forwards;
`
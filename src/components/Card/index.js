import React, {useState} from 'react';
import { useTheme } from '../../utils/ThemeContext';
import "rc-tooltip/assets/bootstrap.css";
import Tooltip from "rc-tooltip";

export default function Card(props) {

  const { darkTheme } = useTheme();

  const isProjectSrc = (props.projectSrc.length > 1);
  const isIframe = (props.iFrameSrc.length > 1);
  
  const [isHover, setIsHover] = useState(false);
  const handleMouseEnter = () => {
    setIsHover(true)
  };
  const handleMouseLeave = () => {
    setIsHover(false)
  };

  // recommend  w *.5625 = h
  const mediaWidth = '100%';
  const mediaHeight = '23rem'

  const styles = {
    card: {
      boxShadow: darkTheme
        ? `1px 1px 10px #b4318d`
        : `1px 1px 10px #581845`,
      margin: '2rem',
      display: 'flex',
      flexDirection: 'column',
      background: darkTheme
        ? '#000025'
        : '#dcd0bc',
      height: '29rem'
    },
    header: {
      color: darkTheme
        ? (isHover
          ? '#f77fbe'
          : '#f4f4d7'
        )
        : (isHover
          ? '#f77fbe'
          : '#581845'
        ),
      fontSize: '2rem',
      margin: '1rem',
    },
    projSrc: {
      textDecoration: 'underline',
      textDecorationColor: darkTheme
        ? (isHover
          ? '#f77fbe'
          : '#f4f4d7'
        )
        : (isHover
          ? '#f77fbe'
          : '#581845'
        )
    },
    desc: {
      color: darkTheme
        ? '#fff'
        : '#ce4ba6',
      fontSize: '1.2rem'
    },
    media: {
      height: mediaHeight,
      width: mediaWidth,
      justifyContent: 'space-around',
      paddingBottom: '1rem',
      overflow: 'hidden',
    },
  };

  return (
    <div className='col-md-8 col-lg-4' style={styles.card} key={props.desc}>
      {/* If there is a repo */}
      {isProjectSrc
        ? <Tooltip
            placement="top"
            overlay={<span>Check out the full project!</span>}
            showArrow="false"
          >
            <a href={props.projectSrc} style={styles.projSrc} target='_blank' rel='noreferrer'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            >
              <h5 id={props.header} style={styles.header}>{props.header}</h5>
            </a>
          </Tooltip>
          
        : <h5 id={props.header} style={styles.header}>{props.header}</h5>
      }
      <p id={props.desc} style={styles.desc}>{props.desc}</p>
      {/* If there is a video: <iframe> instead of <img> */}
      {isIframe
        ? <iframe src={props.iFrameSrc} title={props.iFrameTitle} style={styles.media}
            frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            height='253px' width='' allowFullScreen>  
          </iframe>
        : <img src={props.imgSrc} style={styles.media} alt={props.header}></img>
      }
    </div>
  );
}
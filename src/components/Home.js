import React from 'react';
import styled from 'styled-components';
import Particles from 'react-particles-js';
import { findByLabelText } from '@testing-library/react';

const ParentDiv = styled.div`
  position: relative;
  height: 90vh;
  width:100%;
  overflow: hidden;
` //end of ParentDiv

const MyDiv = styled.div`
  width: 100%;
  position: absolute;
` //MyDiv

const Appa = styled.img`
  width: 25%;
  position: relative;

  @media (max-width: 768px) {
    width: 50%;
  }

  @media (max-width: 600px) {
    width: 70%;
  }
` //Appa

const SecDiv = styled.div`    
   z-index: 10;
` //SecDiv

const particleAttrs = {
    "particles": {
      "number": {
        "value": 50,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "star",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "http://wiki.lexisnexis.com/academic/images/f/fb/Itunes_podcast_icon_300.jpg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.7210787337857428,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 4,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 100,
          "size_min": 8.926325356444401,
          "sync": true
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": .2,
        "direction": "left",
        "random": false,
        "straight": true,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "grab"
        },
        "onclick": {
          "enable": false,
          "mode": "repulse"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 200,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": false
  }

const Home = () => {

    return(
        <ParentDiv>
          
           <MyDiv id="particles-js">
              <Particles params={particleAttrs} />
          </MyDiv> 
          
          <SecDiv>
            <div>
              <div className="sliding-background">
                <img src={require('../img/blue-background.svg')} 
                style={{
                  background: "reapeat-x",
                  height: "90vh", 
                  // width:"4000px", 
                  position:"absolute", 
                  margin:"0", 
                  left:"0"}}/>
                 
              </div>

              <Appa src={require('./appa.svg')} alt="appa"/>
               <div style={{
                 position:"relative",
                 fontSize:"2rem",
                 color:'white',
                 padding:'10%'
               }}>
                <h1 style={{margin:'30px'}}>
                  Welcome!
                </h1>
                <p style={{fontSize:"1.4rem"}}>Feel free to Search through the character's page</p>
              </div>  
            </div>
                  
              
          </SecDiv>            
        </ParentDiv>
        
    )
}

export default Home;
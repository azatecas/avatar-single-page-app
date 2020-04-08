import React from 'react';
import styled from 'styled-components';
import Particles from 'react-particles-js';
import { particleAttrs } from './particlesData';
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


const SecDiv = styled.div`    
   z-index: 10;
` //SecDiv


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
            <div className="appa-cont">
              <img 
                src={require('./appa.svg')} 
                alt="appa"
                className="appa-flying"
                />
            </div>
               <div style={{
                 position:"relative",
                 fontSize:"2rem",
                 color:'white',
                 padding:'10%'
               }}>
                <h1 style={{margin:'30px'}}>
                  Welcome!
                </h1>
                <p style={{fontSize:"1.4rem"}}>Search Episodes or Characters</p>
              </div>  
            </div>
                  
              
          </SecDiv>            
        </ParentDiv>
        
    )
}

export default Home;
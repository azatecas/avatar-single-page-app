  
import React from "react";
import styled from 'styled-components';

const MyDiv = styled.div`

  width: 300px;
  height: 550px;
  ${'' /* background-color: gray;
  color: #282135; */}
  background-color: #ffdd99;
    background-image: url("https://www.transparenttextures.com/patterns/dark-stripes-light.png");
  border-radius: 20px;
  margin: 10px 5px;
  font-family: 'Permanent Marker', cursive;  
  box-shadow: -2px 2px 20px 0px rgba(0,0,0,0.47);

  &:hover{
      transform: scale(1.2);
  }

`   //end of MyDiv

const H1 = styled.h1`
font-size: 28px;
font-family: 'Permanent Marker', cursive;
` //end of H1

const ImgDiv = styled.div`  
  border-radius: 20px;
`   //end ImgDiv
const DivStats = styled.div`  
  display: flex;
  height: 200px;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  ${'' /* font-family: 'arial'; */}
  padding-left: 10px;
  
`   //end ImgDiv




const CharacterCard = (props) => {
    console.log('this is props',props.character);  
    const { name, allies, enemies, photoUrl } = props.character;  

    return (
        <MyDiv>
        <ImgDiv>
            <img src={photoUrl} width="300px" height="250px" style={{borderRadius: '10px', objectFit: 'cover'}}/>
        </ImgDiv>
        <div>
            <H1>{name}</H1>
            <DivStats>
                <p>Affiliation: {
                    props.character.hasOwnProperty("affiliation") ? props.character.affiliation : "unknown"
                }</p>
                <p>Allies: {
                    allies.length !== 0 ? allies.map(item => {
                    return `${item}, `;
                }) : "unknown"}</p>
                <p>Enemies: {
                    enemies.length !== 0 ? enemies.map(item => {
                    return `${item}, `;
                }) : "unknown"}</p>
            </DivStats>
        </div>
        </MyDiv>
    )
}
export default CharacterCard;
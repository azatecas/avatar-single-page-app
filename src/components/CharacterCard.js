import React from "react";
import styled from 'styled-components';

const MyDiv = styled.div`
    width: 350px;
    height: 450px;
    background-color: #ffce5c;
    background-image: url("https://www.transparenttextures.com/patterns/natural-paper.png");
    border-radius: 20px;
    margin: 10px 5px;
    font-family: 'Permanent Marker', cursive;  
    box-shadow: -2px 2px 20px 0px rgba(0,0,0,0.47);
  
  &:hover{
    background-color: #ffe291;
    background-image: url("https://www.transparenttextures.com/patterns/wet-snow.png");
  }
`   //end of MyDiv

const ImgDiv = styled.div`  
  border-radius: 20px 20px 0 0;
  height: 250px;
  background-color: rgba(250, 79, 0, 0.514);
  display: flex;
  align-items: center;
  justify-content: center;
`   //end ImgDiv

const DivStats = styled.div`  
  display: flex;
  height: 150px;
  flex-direction: column;
  align-items: start;
  justify-content: start;
`   //end ImgDiv

const CharacterCard = (props) => {
    // console.log('this is props',props.character);  
    const { name, allies, enemies, photoUrl } = props.character;  

    return (
        <MyDiv>
        <ImgDiv>
            <img src={photoUrl} alt={`cartoon-character-${name}`}width="350px" height="250px" style={{borderRadius: '10px 10px 0px 0px', objectFit: 'cover'}}/>
        </ImgDiv>
        <div>
            <h1 className="character-name">{name}</h1>
            <DivStats>
                <div className="card-content">
                    <p><span className="content-label">Affiliation:</span> {
                        props.character.hasOwnProperty("affiliation") ? props.character.affiliation : "unknown"
                    }</p>
                </div>
                <div className="card-content">
                    <p><span className="content-label">Allies</span>: {
                        allies.length !== 0 ? allies.map(item => {
                        return `${item}, `;
                    }) : "unknown"}</p>
                </div>
                <div className="card-content">
                    <p><span className="content-label">Enemies:</span> {
                        enemies.length !== 0 ? enemies.map(item => {
                        return `${item}, `;
                    }) : "unknown"}</p>
                </div>
            </DivStats>
        </div>
        </MyDiv>
    )
}
export default CharacterCard;
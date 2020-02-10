import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyleHeader = styled.header`
    
    width: 100%;
    height: 15vh;
    ${'' /* top:0; */}
    display: flex;
    ${'' /* border: 5px solid white; */}
    ${'' /* background-color: white; */}
    background-color: #ffce5c;
    background-image: url("https://www.transparenttextures.com/patterns/natural-paper.png");

`


export default function Header() {
    return (
        <StyleHeader>
        <div className="nav-logo">
            <h1>Avatar: The Last Airbender</h1>
         </div>

         <div className="nav-links">
            <Link style={{ textDecoration: 'none' }} to="/">
                <p>Home</p>
            </Link>
            <Link style={{ textDecoration: 'none' }} to="/characters">
                <p>Characters</p>
            </Link> 
        </div>
                     
                           
        </StyleHeader>
    )
}

import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyleHeader = styled.header`
    width: 100%;
    height: 10vh;
    display: flex;
    background-color: #ffce5c;
    background-image: url("https://www.transparenttextures.com/patterns/natural-paper.png");
` //end

export default function Header() {
    return (
        <StyleHeader>
            <div className="nav-logo">
                <h1>Avatar: The Last Airbender</h1>
            </div>

            <div className="nav-links">
                <Link style={{ textDecoration: 'none' }} to="/">
                    <p className="nav-links">Home</p>
                </Link>
                <Link style={{ textDecoration: 'none' }} to="/characters">
                    <p className="nav-links">Characters</p>
                </Link> 
            </div>                
        </StyleHeader>
    )
}

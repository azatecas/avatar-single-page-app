import React from "react";
import { Link, Route } from 'react-router-dom';
import styled from 'styled-components';

const StyleHeader = styled.header`
    position: fixed;
    top:0;
`


export default function Header() {
    return (
        <StyleHeader>
            <h1>Avatar Api Test</h1>             
                <Link to="/">
                    <p>Home</p>
                </Link>
                <Link to="/characters">
                    <p>Characters</p>
                </Link>             
        </StyleHeader>
    )
}

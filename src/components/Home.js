import React from 'react';
import styled from 'styled-components';
import Particles from 'react-particles-js';


const MyDiv = styled.div`
    width: 100%;
    height: 100vh;
    background-color: skyblue;
`

const Home = () => {
    return(
        <Particles>
            <MyDiv id="particles-js">
                <h1>This is the Home Page</h1>
            </MyDiv>
        </Particles>
    )
}

export default Home;
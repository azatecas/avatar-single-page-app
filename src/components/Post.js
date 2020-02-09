import React from 'react';
import styled from 'styled-components';
import CharacterCard from './CharacterCard';

const MyDiv = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;    
    ` //end of MyDiv

const Post = ({character, loading}) => {
    if (loading){
        return <h1>Loading...</h1>
    } 
    return(
        <MyDiv>
            {character.map(item => {
                return <CharacterCard character={item} key={item._id}/>
            })}
            </MyDiv>
    )


}

export default Post;
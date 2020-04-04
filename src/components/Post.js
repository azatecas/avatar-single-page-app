import React from 'react';
import styled from 'styled-components';
import CharacterCard from './CharacterCard';
import '../App.css';

const MyDiv = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;    
    ` //end of MyDiv
const LoadingDiv = styled.div`
    height: 80vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-item: center;
    backgroung-color: maroon;    

`

const Post = ({character, loading, search}) => {
    if (loading){
        return <LoadingDiv >
        <div className="loader">Loading...</div>
        </LoadingDiv>
    } 
    return(
        <MyDiv>
            {character.map(item => {
                if(!item.name.toLowerCase().includes(search)){
                    return null;
                } else {
                    return <CharacterCard character={item} key={item._id}  />
                }
                 
            })}
        </MyDiv>
    )


}

export default Post;
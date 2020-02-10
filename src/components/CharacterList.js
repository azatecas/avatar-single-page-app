import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import CharacterCard from './CharacterCard';
import Post from "./Post";
import Pagination from './Pagination';




const CharacterList = () => {
    
    const [character, setCharacter] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(50);

    const fullApi = 'https://last-airbender-api.herokuapp.com/api/v1/characters?perPage=1?page=1';

    const partialApi = 'https://last-airbender-api.herokuapp.com/api/v1/characters';
    
    useEffect(() => {
        setLoading(true);
        axios
            .get(fullApi)
            .then(res => {
                // console.log('this is res',res.data);
                setCharacter(res.data.sort());
                setLoading(false);

            })
            .catch(err => {
                console.log(err);
            })
        
    }, []);

    //get current post
    const indexOfLastPost = currentPage * postPerPage;
    const indexofFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = character.slice(indexofFirstPost, indexOfLastPost);

    //paginate
    const paginate = (int) => {
        setCurrentPage(int);
    }


    return (
        <div className="character-page">        
            <h1>characters page</h1>
            <Pagination  postsPerPage={postPerPage} totalPosts={character.length}   paginate={paginate} />  
            <Post character={currentPosts} loading={loading}/>  
            <Pagination  postsPerPage={postPerPage} totalPosts={character.length}   paginate={paginate} />    
        </div>
    )

}

export default CharacterList;
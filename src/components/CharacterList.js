import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Post from "./Post";
import Pagination from './Pagination';

const CharacterList = () => {
    const [character, setCharacter] = useState([]);
    const [search, setSearch] = useState('')
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(50);

    const fullApi = 'https://last-airbender-api.herokuapp.com/api/v1/characters?perPage=1?page=1';
    
    useEffect(() => {
        setLoading(true);
        axios
            .get(fullApi)
            .then(res => {
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
        window.scroll({top: 0, left: 0, behavior: 'smooth' });
    }
    //search handler
    const handleChange = e => {
        setSearch(
            //makes search input lowercase
            e.target.value.toLowerCase()
        )
    }

    return (
        <div className="character-page">
            <input
                className="search-bar"
                name="search"
                label="search" 
                placeholder="Search by Name🔍"
                onChange={handleChange}
            /> 

            {search === '' ?
                <>                   
                    <Pagination  
                        postsPerPage={postPerPage} 
                        totalPosts={character.length}   
                        paginate={paginate} 
                        />  
                    <Post 
                        character={currentPosts} 
                        loading={loading} 
                        search={search}     
                        />  
                    <Pagination  
                        postsPerPage={postPerPage} 
                        totalPosts={character.length}   
                        paginate={paginate}
                        />
                </>
                : 
                <Post 
                character={character} 
                loading={loading} 
                search={search}     
                />  
            }    
        </div>
    )

}

export default CharacterList;
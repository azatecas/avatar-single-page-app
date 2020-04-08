import React, { useState, useEffect } from 'react';
import { avatarEpisodes } from './episodeData';


const Episodes = () => {
    const [current, setCurrent] = useState([])
    const [episodes, setEpisodes] = useState(avatarEpisodes);

    const handleBook1 = () => {
        setCurrent(episodes.book1);
    }
    const handleBook2 = () => {
        setCurrent(episodes.book2);
    }
    const handleBook3 = () => {
        setCurrent(episodes.book3);
    }

    console.log(episodes);
    useEffect(() => {
        setCurrent(episodes.book1);
    }, []);


    return(
        <div className="episodes-cont">
            <div className="books">
                <h1>SELECT SEASONS</h1>
                <div className="books1" onClick={handleBook1}>
                    <h3>Book 1</h3>
                </div>
                <div className="books2" onClick={handleBook2}>
                    <h3>Book 2</h3>
                </div>
                <div className="books3" onClick={handleBook3}>
                    <h3>Book 3</h3>
                </div>
            </div>
            <div className="book-episodes">
                {current.map(item => (
                    <div className="ind-ep" key={item.id}>
                        <h1>{item.title}</h1>
                        <div>
                            <p><span>Episode: </span>{item.prod_code}</p>
                            <p><span>Date: </span>{item.air_date}</p>
                            <p><span>Director:</span></p> 
                                <p className="writers">{item.director}</p>
                            <p><span>Writer(s):</span></p> {item.writter.map((item, index) => (
                                <p className="writers" key={index}>{item}</p>
                                ))}
                        </div>
                        
                        
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Episodes;
import React from 'react';
import '../App.css';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li 
            className="page-numbers" 
            style={{ textDecoration: 'none' }} 
            key={number} 
            onClick={()=> paginate(number)}
            >
              <a 
              className="page-numbers" 
              style={{ textDecoration: 'none' }}
              onClick={(e) => e.preventDefault()} href='!#' >

                {number}
                
              </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
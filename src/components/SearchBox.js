import React from 'react';

const SearchBox=({onSearchChange})=>{
    return(
        <div>
            <input type='text' placeholder='Search Robots' onChange={onSearchChange}></input>
        </div>
    );
}

export default SearchBox;
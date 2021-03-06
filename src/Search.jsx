import React, { useState } from 'react'
import SearchResult from './SearchResult';

const Search = () => {
    const [img, setImg] = useState("");
    const inputEvent = (event) =>{
        const data = event.target.value;
        console.log(data);
        setImg(data);
    }
    return (
        <>
            <div className='searchbar'>
                <input type="text" placeholder='Search anything' value={img} onChange={inputEvent} />
                { img === "" ? null : <SearchResult name={img} /> } 
            </div>
        </>
    );
}

export default Search;
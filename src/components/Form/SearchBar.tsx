import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
type SearchProps = {
    onSearch?:any;
    onReset?:any;
    searchItem?:any;
}
const SearchBar:React.FC<SearchProps> = ({ searchItem, onSearch, onReset }) => {

  const handleSearch = (e:any) => {
    const searchTerm = e.target.value;
    onSearch(searchTerm);
  };

  const handleReset = () => {
    onReset();
  };

  return (
    <div className='bg-transparent border border-white rounded px-2 py-1 flex mr-4'>
      <SearchIcon className='text-white' />
      <input
        type='text'
        className='focus:outline-none bg-transparent font-semibold text-white'
        placeholder='Search your favourite movies'
        value={searchItem}
        onChange={handleSearch}
        name='search-movie'
      />
      {searchItem.length >= 1 && <CloseIcon className='text-white' onClick={handleReset} />}
    </div>
  );
};

export default SearchBar;

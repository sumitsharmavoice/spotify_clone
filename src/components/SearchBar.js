import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        const term = e.target.value;
        setSearchTerm(term);
        onSearch(term);
    };

    return (
        <input
            type="text"
            placeholder="Search for a song..."
            value={searchTerm}
            onChange={handleSearch}
        />
    );
};

export default SearchBar;

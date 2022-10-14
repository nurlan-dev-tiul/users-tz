import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './style.scss';

export const Search = ({search, onChange}) => {
    return (
        <div className='search'>
            <form className='search__form'>
                <input 
                    className='search__inp' 
                    type="text"
                    value={search}
                    onChange={(e) => onChange(e.target.value)}
                />
                <FontAwesomeIcon className='search__icon' icon={faMagnifyingGlass} />
            </form>
        </div>
    )
}

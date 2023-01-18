import { useState } from 'react';
import css from 'components/Serchbar/Serchbar.module.css';
import PropTypes from 'prop-types';


export function Searchbar ({onSubmit}) {
    const[searchQuery, setSearchQuery] = useState('');
    
    const handleChange = e => {
        setSearchQuery(e.currentTarget.value.toLowerCase());
    };
    
    const handleSubmit = e => {
        e.preventDefault();
        if (searchQuery.trim() === '') {
            return alert('Missing search parameters, please write them');
        }
        
        onSubmit(searchQuery);
        setSearchQuery('');
    };
      
        return (
            <header className={css.searchbar}>
                <form className={css.form} onSubmit={handleSubmit}>
                    <button type="submit" className={css.submit}>
                        <span>
                            <span className="{css.label}">Search</span>
                        </span>
                    </button>

                    <input
                        className={css.input}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        name="searchQuery"
                        value={searchQuery}
                        onChange={handleChange}
                    />
                </form>
            </header>
        );
    }

    Searchbar.propTypes = {
        onSubmit: PropTypes.func.isRequired,
    };



import { Component } from 'react';
import css from 'components/Serchbar/Serchbar.module.css';
import PropTypes from 'prop-types';

export class Searchbar extends Component {
    state = {
        searchQuery: '',
    };

    handleChange = e => {
        this.setState({ searchQuery: e.currentTarget.value.toLowerCase() });
    };
    
    handleSubmit = e => {
    e.preventDefault();
    if (this.state.searchQuery.trim() === '') {
        return alert ('Missing search parameters, please write them');
    }
    this.props.onSubmit(this.state.searchQuery);
        this.reset();
    };
    
    reset = () => {
        this.setState({ searchQuery: '' });
    };
    
    render() {
        return (
            <header className={css.searchbar}>
                <form className={css.form} onSubmit={this.handleSubmit}>
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
                        onChange={this.handleChange}
                    />
                </form>
            </header>
        );
    };
};

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};



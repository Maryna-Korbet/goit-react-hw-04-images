import fetchDataApi from 'services/api';
import { Component } from 'react';
import { Searchbar } from 'components/Serchbar/Serchbar';
import css from 'components/App/App.module.css';


export class App extends Component {
  state = {
    searchQuery: '',
    images: [],
    page: 1,
    per_page: 12,
  }

  formSubmit = searchQuery => {
    this.setState({
      searchQuery,
      images: [],
      page: 1,
      loadMore: false,
    });
  };
  
  render() {
    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.formSubmit} />
      </div>
    );
  }
}


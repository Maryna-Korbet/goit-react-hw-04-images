import fetchDataApi from 'services/api';
import { Component } from 'react';
import { Searchbar } from 'components/Serchbar/Serchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import css from 'components/App/App.module.css';


export class App extends Component {
  state = {
    searchQuery: '',
    images: [],
    page: 1,
    per_page: 12,
    error: null,
  }
  componentDidUpdate(_, prevState) {
    const { searchQuery, page } = this.state; 
    if (searchQuery=== '') {
      return;
    }
    if (prevState.searchQuery !== searchQuery || prevState.page !== page) {
      this.fetchGallary(searchQuery, page);
      }
  };
  
  fetchGallary = async (searchQuery, page) => {
    try {
      this.setState({ isLoading: true });
      const { hits } = await fetchDataApi(searchQuery, page);
      this.setState(prevState => ({
        images: [...prevState.images, ...hits],
      }));
    } catch (error) {
      this.setState({ error: 'Error. Try reloading the page.' });
    } 
  };

  formSubmit = searchQuery => {
    this.setState({
      searchQuery,
      images: [],
      page: 1,
      loadMore: false,
    });
  };
  
  render() {
    const { images } = this.state;

    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.formSubmit} />
        <ImageGallery images={images} openModal={this.openModal} />
      </div>
    );
  }
};


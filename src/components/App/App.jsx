import fetchDataApi from 'services/api';
import { Component } from 'react';
import { Searchbar } from 'components/Serchbar/Serchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';
import { Modal } from 'components/Modal/Modal';
import css from 'components/App/App.module.css';

export class App extends Component {
  state = {
    searchQuery: '',
    images: [],
    page: 1,
    error: null,
    isLoading: false,
    isLoadMore: false,
    isShowModal: false,
  };

  componentDidUpdate(_, prevState) {
    const { searchQuery, page } = this.state;
    if (searchQuery === '') {
      return;
    }
    if (prevState.searchQuery !== searchQuery || prevState.page !== page) {
      this.fetchGallary(searchQuery, page);
    }
  };

  fetchGallary = async (searchQuery, page) => {
    try {
      this.setState({ isLoading: true });
      const { hits, totalHits } = await fetchDataApi(searchQuery, page);
      this.setState(prevState => ({
        images: [...prevState.images, ...hits],
        isLoadMore: Math.ceil(totalHits / this.state.per_page) !== page - 1,
        totalHits,
      }));
    } catch (error) {
        this.setState({ error: 'Error. Try reloading the page.'});
    } finally {
      this.setState({ isLoading: false });
    }
  };

  formSubmit = searchQuery => {
    this.setState({
      searchQuery,
      images: [],
      page: 1,
      isLoadMore: false,
    });
  };

  loadMoreImages = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  openModal = largeImageURL => {
    console.log(largeImageURL);
    this.setState({
      isShowModal: true,
      largeImageURL: largeImageURL,
    });
  };

  closeModal = () => {
    this.setState({
      isShowModal: false,
    });
  };

  render() {
    const {
      images,
      page,
      isLoading,
      isLoadMore,
      isShowModal,
      largeImageURL,
      totalHits,
    } = this.state;

    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.formSubmit} />
        {images.length > 0 && (
          <ImageGallery images={images} openModal={this.openModal} />
        )}
        {images.length > 0 && isLoadMore < totalHits && (
          <Button onloadMore={this.loadMoreImages} page={page} />
        )}
        {isLoading && <Loader />}
        {isShowModal && (
          <Modal largeImageURL={largeImageURL} onClose={this.closeModal} />
        )}
      </div>
    );
  }
}

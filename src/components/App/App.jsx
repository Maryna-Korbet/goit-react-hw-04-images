import fetchDataApi from 'services/api';
import { useState, useEffect } from 'react';
import { Searchbar } from 'components/Serchbar/Serchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';
import { Modal } from 'components/Modal/Modal';
import css from 'components/App/App.module.css';

const ERROR_MESSAGE = 'Error. Try reloading the page.';

export function App () {
  const [searchQuery, setSearchQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadMore, setIsLoadMore] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);
  const [totalHits, setTotalHits] = useState(0);
  const [largeImageURL, setLargeImageURL] = useState({});

  useEffect(()=>{
  fetchGallary(searchQuery, page);
  }, [searchQuery, page]);
  
  const fetchGallary = async (searchQuery, page) => {
    if (searchQuery === '') {
    return;
  }
    try {
    setIsLoading(true);
    setError(null);
    const { hits, totalHits } = await fetchDataApi(searchQuery, page);
    setImages(prevState => [...prevState, ...hits]);
    setIsLoadMore(Math.ceil(totalHits / 12) !== page - 1);
    setTotalHits(totalHits);
  } catch{
    setError(ERROR_MESSAGE);
  } finally {
    setIsLoading(false);
  }
};

  const formSubmit = searchQuery => {
    setSearchQuery(searchQuery);
    setImages([]);
    setPage(1);
    setIsLoadMore(false);
  };

  const loadMoreImages = () => {
    setPage(prevState => prevState + 1);
  };

  const openModal = largeImageURL => {
    setIsShowModal(true);
    setLargeImageURL(largeImageURL);
  };

  const closeModal = () => {
    setIsShowModal(false);
  };
    
    return (
      <div className={css.App}>
        <Searchbar onSubmit={formSubmit} />
        {images.length > 0 && (
          <ImageGallery images={images} openModal={openModal} />
        )}
        {images.length > 0 && isLoadMore < totalHits && !isLoading && (
          <Button onloadMore={loadMoreImages} page={page} />
        )}
        {isLoading && <Loader />}
        {error && <p style={{ color: 'red'}}>{ERROR_MESSAGE}</p>}
        {isShowModal && (
          <Modal largeImageURL={largeImageURL} onClose={closeModal} />
        )}
      </div>
    );
}

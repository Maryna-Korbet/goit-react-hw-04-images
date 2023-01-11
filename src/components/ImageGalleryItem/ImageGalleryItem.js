import css from 'components/ImageGalleryItem/ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ src, alt,  largeImageURL, openModal }) => {
    return (
        <li className={css.item} onClick={() => openModal(largeImageURL)}>
            <img src={src} alt={alt} className={css.image} />
        </li>
    );
};

ImageGalleryItem.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    largeImageURL: PropTypes.string,
    openModal: PropTypes.func.isRequired,
};



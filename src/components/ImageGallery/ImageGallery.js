import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from 'components/ImageGallery/ImageGallery.module.css';
import PropTypes from 'prop-types';

export const ImageGallery = ({ images, openModal }) => (
    <ul className={css.gallery}>
        {images.map(({ id, webformatURL, tags, largeImageURL}) => (
            <ImageGalleryItem
                key={id}
                src={webformatURL}
                alt={tags}
                largeImageURL={largeImageURL}
                openModal={openModal}
            />
        ))};
    </ul>
);

ImageGallery.propTypes = {
    images: PropTypes.array.isRequired,
    openModal: PropTypes.func.isRequired,
    id: PropTypes.string,
    webformatURL: PropTypes.string,
    tags: PropTypes.string,
    largeImageURL: PropTypes.string,
};



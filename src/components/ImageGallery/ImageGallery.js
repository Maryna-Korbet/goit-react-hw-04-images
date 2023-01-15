import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from 'components/ImageGallery/ImageGallery.module.css';
import { PropTypes } from 'prop-types';

export const ImageGallery = ({ images, openModal }) => (
    <ul className={css.gallery}>
        {images.map(image => (
            <ImageGalleryItem
                image={image}
                key={image.id}
                openModal={() => openModal(image.largeImageURL)}
                
            />
        ))}
    </ul>
)

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(PropTypes.object).isRequired,
    openModal: PropTypes.func.isRequired,
}


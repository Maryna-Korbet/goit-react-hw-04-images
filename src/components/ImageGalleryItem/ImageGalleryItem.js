import css from 'components/ImageGalleryItem/ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ image,  openModal }) => {
    return (
        <li className={css.item} onClick={openModal}>
            <img
                src={image.webformatURL}
                alt={image.tags}
                className={css.image} />
        </li>
    )
}

ImageGalleryItem.propTypes = {
    image: PropTypes.object,
    openModal: PropTypes.func,
}




import css from 'components/ImageGalleryItem/ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ src, alt,  largeImageURL, openModal }) => {
    return (
        <li className={css.item} onClick={() => openModal(largeImageURL)}>
            <img src={src} alt={alt} className={css.image} />
        </li>
    );
};



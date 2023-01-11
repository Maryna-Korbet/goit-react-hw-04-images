import css from 'components/ImageGalleryItem/ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ src, alt }) => {
    return (
        <li className={css.item}>
            <img src={src} alt={alt} className={css.image} />
        </li>
    );
};



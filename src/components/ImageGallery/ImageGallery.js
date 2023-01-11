import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from 'components/ImageGallery/ImageGallery.module.css';

export const ImageGallery = ({ images }) => (
    <ul className={css.gallery}>
        {images.map(({ id, webformatURL, tags}) => (
            <ImageGalleryItem
                key={id}
                src={webformatURL}
                alt={tags}
            />
        ))}
    </ul>
);


import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from 'components/ImageGallery/ImageGallery.module.css';

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
        ))}
    </ul>
);


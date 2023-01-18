import { useEffect } from "react";
import { createPortal } from "react-dom";
import css from 'components/Modal/Modal.module.css';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

export function Modal ({largeImageURL, tags, onClose}) {
    useEffect (()=> {
        window.addEventListener('keydown', handleKeyDown);
        return() => {
            window.removeEventListener('keydown', handleKeyDown);
        }
    });

    const handleKeyDown = e => {
        if (e.code === 'Escape') {
            onClose();
        }
    };

    const handleBackDropClick = e => {
        if (e.currentTarget === e.target) {
            onClose();
    }
    };

        return createPortal(
            <div className={css.backdrop} onClick={handleBackDropClick}>
                <div className={css.content}>
                    <img src={largeImageURL} alt={tags} />
                </div>
            </div>,
        modalRoot
    );
}

Modal.propTypes = {
    largeImageUrl: PropTypes.string,
    tags: PropTypes.string,
    onClick: PropTypes.func,
};

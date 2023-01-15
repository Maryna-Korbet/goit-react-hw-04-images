import { Component } from "react";
import { createPortal } from "react-dom";
import css from 'components/Modal/Modal.module.css';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
    static propTypes = {
        largeImageUrl: PropTypes.string,
        tags: PropTypes.string,
        onClick: PropTypes.func,
    };

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    }
    
    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown = e => {
        if (e.code === 'Escape') {
            this.props.onClose();
        }
    };

    handleBackDropClick = e => {
        if (e.currentTarget === e.target) {
            this.props.onClose();
    }
    };

    render() {
        return createPortal(
            <div className={css.backdrop} onClick={this.handleBackDropClick}>
                <div className={css.content}>
                    <img src={this.props.largeImageURL} alt={this.props.tags} />
                </div>
            </div>,
        modalRoot
    );
    }
}



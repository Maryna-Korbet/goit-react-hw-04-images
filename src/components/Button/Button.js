import css from 'components/Button/Button.module.css';
import PropTypes from 'prop-types';

export const Button = ({ onloadMore }) => {
    return (
        <div className={css.container} onClick={onloadMore}>
            <button type="button" className={css.button}>
        Load more
        </button>
    </div>
    );
};

Button.propTypes = {
    onloadMore: PropTypes.func.isRequired,
};



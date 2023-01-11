import { Grid } from 'react-loader-spinner';
import css from 'components/Loader/Loader.module.css';

export function Loader() {
    return (
        <Grid
            height="70"
            width="70"
            color="#3f51b5"
            ariaLabel="grid-loading"
            radius="12.5"
            className={css.loader}
        />
    );
};

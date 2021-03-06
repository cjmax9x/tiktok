import Proptypes from 'prop-types';
import { forwardRef, useState } from 'react';
import classNames from 'classnames';
import styles from './Image.module.scss';
import images from '~/assets/images';

const Image = forwardRef(({ className, src, alt, fallback: propFallback = images.errorImage, ...props }, ref) => {
    const [fallback, setFallback] = useState('');
    const handleFallback = () => {
        setFallback(propFallback);
    };
    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={handleFallback}
        />
    );
});

Image.propTypes = {
    className: Proptypes.string,
    src: Proptypes.string,
    alt: Proptypes.string,
    fallback: Proptypes.string,
};
export default Image;

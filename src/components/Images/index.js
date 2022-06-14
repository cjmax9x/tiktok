import { forwardRef, useState } from 'react';
import classNames from 'classnames';
import styles from './Image.module.scss';
import images from '~/assets/images';

function Image({ className, src, alt, fallback: propFallback = images.errorImage, ...props }, ref) {
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
}

export default forwardRef(Image);

import { useRef } from 'react';
import styles from './styles.module.css';
import React from 'react';

const Slider = ({children}) => {
    const sliderLeft = useRef(null);

    const scrollLeft = () => {
        sliderLeft.current.scrollLeft -= 150;
    }

    const scrollRight = () => {
        sliderLeft.current.scrollLeft += 150;
    }

    return(
        <div className={styles.slider}>
          <button onClick={scrollLeft} className={styles.arrow}>{'<'}</button>
            {React.cloneElement(children, {ref: sliderLeft})}
          <button onClick={scrollRight} className={styles.arrow}>{'>'}</button>
        </div>
    )
}

export default Slider;
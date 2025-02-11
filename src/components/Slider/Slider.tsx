import { useRef } from 'react';
import styles from './styles.module.css';
import React from 'react';

interface Props {
  children: React.ReactElement;
  step?: number;
  isDark: boolean;
}

const Slider = ({children, step = 150, isDark}: Props) => {
    const sliderLeft = useRef<HTMLElement | null>(null);

    const scrollLeft = () => {
      if(!sliderLeft.current) return
        sliderLeft.current.scrollLeft -= step;
    }

    const scrollRight = () => {
      if(!sliderLeft.current) return
        sliderLeft.current.scrollLeft += step;
    }

    return(
        <div className={`${styles.slider} ${isDark ? styles.dark : styles.light}`}>
          <button onClick={scrollLeft} className={styles.arrow}>{'<'}</button>
            {React.cloneElement(children, {ref: sliderLeft})}
          <button onClick={scrollRight} className={styles.arrow}>{'>'}</button>
        </div>
    )
}

export default Slider;
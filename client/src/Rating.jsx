import React from 'react';
import styles from './style.css';

const Rating = ({rating}) => {

  let stars = [];
  for (let i = 0; i < 10; i++) {
    let klass = `fas fa-star ${styles.gray} ${styles.stars}`;
    if (rating >= i) {
      klass = `fas fa-star teal ${styles.teal} ${styles.stars}`;
    }
    stars.push(
      <span 
        style={{
          display: "inline-block",
          width: "5px",
          overflow: "hidden",
          direction: i % 2 === 0 ? "ltr" : "rtl"
        }}
        className={klass}
      />
    );
  }

return (

  <span>{stars}</span>

)
}

export default Rating;
import React from 'react';
import PropTypes from 'prop-types';
import PhotoCard from '../PhotoCard/PhotoCard';
import styles from './Gallery.module.css';

const Gallery = ({ items, handleButtonClick }) => (
  <ul className={styles.gallery}>
    {items.map(el => (
      <li className={styles.list} key={el.id}>
        <PhotoCard id={el.id} onClick={handleButtonClick} {...el} />
      </li>
    ))}
  </ul>
);

Gallery.propTypes = {
  handleButtonClick: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    }).isRequired,
  ).isRequired,
};

export default Gallery;

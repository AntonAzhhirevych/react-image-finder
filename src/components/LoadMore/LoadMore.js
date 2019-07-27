import React from 'react';
import PropTypes from 'prop-types';
import styles from './LoadMore.module.css';

const LoadMore = ({ onButton }) => (
  <button onClick={onButton} className={styles.button} type="button">
    Load more
  </button>
);

LoadMore.propTypes = {
  onButton: PropTypes.func.isRequired,
};

export default LoadMore;

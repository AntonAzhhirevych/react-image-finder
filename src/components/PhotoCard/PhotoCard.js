import React, { createRef } from 'react';
import PropTypes from 'prop-types';
import styles from './PhotoCard.module.css';

const backdropRef = createRef();

const PhotoCard = ({
  webformatURL,
  likes,
  views,
  comments,
  downloads,
  onClick,
  id,
}) => (
  <div className={styles.photo_card}>
    <img
      className={styles.photo_card_img}
      src={webformatURL}
      alt="pixabay_image"
    />

    <div className={styles.stats}>
      <p className={styles.stats_item}>
        <i className="material-icons">thumb_up</i>
        {likes}
      </p>
      <p className={styles.stats_item}>
        <i className="material-icons">visibility</i>
        {views}
      </p>
      <p className={styles.stats_item}>
        <i className="material-icons">comment</i>
        {comments}
      </p>
      <p className={styles.stats_item}>
        <i className="material-icons">cloud_download</i>
        {downloads}
      </p>
    </div>
    <button
      type="button"
      ref={backdropRef}
      onClick={e => onClick(e, id)}
      className={styles.fullscreen_button}
    >
      <i className="material-icons">zoom_out_map</i>
    </button>
  </div>
);

PhotoCard.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  downloads: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default PhotoCard;

import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';

class Modal extends Component {
  state = {};

  static propTypes = {
    image: PropTypes.string.isRequired,
    closeModal: PropTypes.func.isRequired,
  };

  backdropRef = createRef();

  componentDidMount() {
    window.addEventListener('keydown', this.handleEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEsc);
  }

  handleEsc = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };

  clickModal = e => {
    const { current } = this.backdropRef;
    if (e.target === current) {
      this.props.closeModal();
    }
  };

  render() {
    const { image } = this.props;
    return (
      <div
        onClick={this.clickModal}
        role="presentation"
        className={styles.overlay}
        ref={this.backdropRef}
      >
        <div className={styles.modal}>
          <img src={image} alt="pixabay_image" width="100%" />
        </div>
      </div>
    );
  }
}

export default Modal;

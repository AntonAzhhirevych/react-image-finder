import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './SearchForm.module.css';

class SearchForm extends Component {
  state = {
    search: '',
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  handleSubmitForm = e => {
    e.preventDefault();
    const { onSubmit } = this.props;
    const { search } = this.state;

    onSubmit(search);

    this.reset();
  };

  handleChangeInput = ({ target }) => {
    this.setState({ search: target.value });
  };

  reset = () => {
    this.setState({ search: '' });
  };

  render() {
    const { search } = this.state;
    return (
      <form className={styles.search_form} onSubmit={this.handleSubmitForm}>
        <input
          type="text"
          autoComplete="off"
          placeholder="Search images..."
          onChange={this.handleChangeInput}
          value={search}
        />
      </form>
    );
  }
}

export default SearchForm;

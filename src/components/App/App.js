import React, { Component } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Gallery from '../Gallery/Gallery';
import UseAPI from '../API/API';
import LoadMore from '../LoadMore/LoadMore';
import Modal from '../Modal/Modal';
import NoFound from '../NoFound/NoFound';

class App extends Component {
  state = {
    items: [],
    search: '',
    modal: false,
    modalImg: '',
  };

  currentPage = 2;

  handleButtonClick = () => {
    const { search, items } = this.state;

    UseAPI(search, this.currentPage).then(({ data }) =>
      this.setState({ items: [...items, ...data.hits] }),
    );

    this.currentPage += 1;
  };

  getValueSearch = value => {
    this.setState({ search: value });

    UseAPI(value).then(({ data }) => this.setState({ items: data.hits }));
  };

  getItemKey = (e, key) => {
    this.getlargeImageURL(key);
  };

  getlargeImageURL = key => {
    const { items } = this.state;
    const result = items.find(item => item.id === key);

    this.openModal(result.largeImageURL);
  };

  openModal = src => {
    this.setState({ modal: true });
    this.setState({ modalImg: src });
  };

  closeModal = () => {
    this.setState({ modal: false });
  };

  render() {
    const { items, modal, modalImg, search } = this.state;
    return (
      <div>
        <SearchForm onSubmit={this.getValueSearch} />
        <Gallery items={items} handleButtonClick={this.getItemKey} />
        {items.length > 0 && <LoadMore onButton={this.handleButtonClick} />}
        {items.length === 0 && search.length > 0 ? <NoFound /> : null}
        {modal && <Modal image={modalImg} closeModal={this.closeModal} />}
      </div>
    );
  }
}

export default App;

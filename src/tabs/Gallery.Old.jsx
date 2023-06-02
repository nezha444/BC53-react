import { Component } from 'react';

import * as ImageService from 'service/image-service';
import {
  Button,
  SearchForm,
  Text,
  PhotosList,
  Loader,
  Modal,
} from 'components';

console.log('ImageService :>> ', ImageService);
export class Gallery extends Component {
  state = {
    query: '',
    page: 1,
    photos: [],
    showBtn: false,
    isEmpty: false,
    error: '',
    isLoading: false,
    largeImageURL: '',
  };

  componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.setState({ isLoading: true });
      ImageService.getImages(query, page)
        .then(({ photos, total_results }) => {
          if (!photos.length) {
            this.setState({ isEmpty: true });
            return;
          }
          this.setState(prevState => ({
            photos: [...prevState.photos, ...photos],
            showBtn: page < Math.ceil(total_results / 15),
          }));
        })
        .catch(error => {
          this.setState({ error: error.message });
        })
        .finally(() => {
          this.setState({ isLoading: false });
        });
    }
  }

  onSubmit = query => {
    if (this.state.query === query) {
      return alert('Already shown');
    }
    this.setState({
      query,
      page: 1,
      photos: [],
      showBtn: false,
      isEmpty: false,
      error: '',
    });
  };
  handeClick = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  handleClick = () => {
    this.setState(prev => ({
      page: prev.page + 1,
    }));
  };
  showModal = largeImageURL => {
    this.setState({ largeImageURL });
  };

  render() {
    const { photos, showBtn, isEmpty, error, isLoading, largeImageURL } =
      this.state;
    return (
      <>
        <SearchForm onSubmit={this.onSubmit} />
        {photos.length > 0 && (
          <PhotosList photos={photos} showModal={this.showModal} />
        )}
        {showBtn && <Button onClick={this.handleClick}>Load more...</Button>}
        {isEmpty && (
          <Text textAlign="center">Sorry. There are no images ... 😭</Text>
        )}
        {error && <Text textAlign="center">Sorry. {error} ... 😭</Text>}
        {isLoading && <Loader />}
        {largeImageURL && (
          <Modal largeImageURL={largeImageURL} modalClose={this.showModal} />
        )}
      </>
    );
  }
}

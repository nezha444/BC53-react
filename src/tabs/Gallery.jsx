import { Component } from 'react';

import * as ImageService from 'service/image-service';
import { Button, SearchForm, Grid, GridItem, Text, CardItem } from 'components';
console.log('ImageService :>> ', ImageService);
export class Gallery extends Component {
  state = {
    query: '',
    page: 1,
    photos: [],
    showBtn: false,
    isEmpty: false,
    error: '',
  };
  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
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

  render() {
    const { photos, showBtn, isEmpty, error } = this.state;
    return (
      <>
        <SearchForm onSubmit={this.onSubmit} />
        <Grid>
          {photos.map(({ id, avg_color, alt, src }) => (
            <GridItem key={id}>
              <CardItem color={avg_color}>
                <img src={src.large} alt={alt} />
              </CardItem>
            </GridItem>
          ))}
        </Grid>
        {showBtn && <Button onClick={this.handleClick}>Load more...</Button>}
        {isEmpty && (
          <Text textAlign="center">Sorry. There are no images ... 😭</Text>
        )}
        {error && <Text textAlign="center">Sorry. {error} ... 😭</Text>}
      </>
    );
  }
}

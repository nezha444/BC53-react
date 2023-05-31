import { Component } from 'react';

import * as ImageService from 'service/image-service';
import { Button, SearchForm, Grid, GridItem, Text, CardItem } from 'components';
console.log('ImageService :>> ', ImageService);
export class Gallery extends Component {
  state = {
    query: '',
    page: 1,
    photos: [],
  };
  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      ImageService.getImages(query, page)
        .then(({ photos, total_results }) => {
          if (!photos.length) {
            console.log('Query is empty');
            return;
          }
          this.setState(prevState => ({
            photos: [...prevState.photos, ...photos],
          }));
        })
        .catch(error => {
          console.log(error.message);
        });
    }
  }

  onSubmit = query => {
    //         query: query
    this.setState({ query });
  };
  render() {
    const { photos } = this.state;
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
        <Text textAlign="center">Sorry. There are no images ... 😭</Text>
      </>
    );
  }
}

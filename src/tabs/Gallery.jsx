import { Component } from 'react';

import * as ImageService from 'service/image-service';
import { Button, SearchForm, Grid, GridItem, Text, CardItem } from 'components';

export class Gallery extends Component {
  state = {
    query: '',
  }
  onSubmit = (query) => {
    //         query: query
    this.setState({query})
  }
  render() {
    return (
      <>
        <SearchForm onSubmit={this.onSubmit} />
        <Text textAlign="center">Sorry. There are no images ... 😭</Text>
      </>
    );
  }
}

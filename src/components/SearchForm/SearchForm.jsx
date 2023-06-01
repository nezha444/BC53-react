import { Component } from 'react';

import { FiSearch } from 'react-icons/fi';
import { FormBtn, InputSearch, SearchFormStyled } from './SearchForm.styled';

export class SearchForm extends Component {
  state = {
    search: '',
  }

  handleChange = e => {
    this.setState({ search: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault()
    if (!this.state.search.trim()) {
      return alert('введите текст')
    }
    this.props.onSubmit(this.state.search)
    this.setState({search: ""})
  }

  render() {
    return (
      <SearchFormStyled onSubmit={this.handleSubmit}>
        <FormBtn type="submit">
          <FiSearch size="16px" />
        </FormBtn>
        <InputSearch
          placeholder="What do you want to write?"
          name="search"
          // required
          autoFocus
          value={this.state.search}
          onChange = {this.handleChange}
        />
    </SearchFormStyled>
    )
  }
}

import { nanoid } from 'nanoid';
import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { FormBtn, InputSearch, SearchFormStyled } from './TodosForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addTodos } from 'redux/todoSlice';

export const TodosForm = ({ onSubmit }) => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch() 
  const handleChange = e => {
    setSearch(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!search.trim()) {
      return alert('введите текст');
    }
    const todo = { text:search, id: nanoid() };
    dispatch(addTodos(todo))
    setSearch('');
  };

  return (
    <SearchFormStyled onSubmit={handleSubmit}>
      <FormBtn type="submit">
        <FiSearch size="16px" />
      </FormBtn>
      <InputSearch
        placeholder="What do you want to write?"
        name="search"
        // required
        autoFocus
        value={search}
        onChange={handleChange}
      />
    </SearchFormStyled>
  );
};

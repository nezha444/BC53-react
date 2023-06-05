import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Grid, GridItem, SearchForm, EditForm, Text, Todo } from 'components';

export const Todos = () => {
  const [todos, setTodos] = useState([]);
  const onSubmit = text => {
    const todo = { text, id: nanoid() };
    setTodos(prevTodos => [...prevTodos, todo]);
  };

  return (
    <>
      <SearchForm onSubmit={onSubmit} />
      <Grid>
        {todos.map((todo, index) => (
          <GridItem key={todo.id}>
            <Todo id={todo.id} text={todo.text} counter={index + 1} />
          </GridItem>
        ))}
      </Grid>
    </>
  );
};

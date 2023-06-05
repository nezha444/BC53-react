import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { Grid, GridItem, SearchForm, EditForm, Text, Todo } from 'components';
import { useLocalStorage } from 'hooks/useLocalStorage';

const LS_KEY = 'todos';
export const Todos = () => {
  const [todos, setTodos] = useLocalStorage(LS_KEY, []);
  const onSubmit = text => {
    const todo = { text, id: nanoid() };
    const isExist = todos.some(
      e => e.text.toLowerCase() === text.toLowerCase()
    );
    if (isExist) {
      alert(`Todo ${text} already exists`);
      return;
    }
    setTodos(prevTodos => [...prevTodos, todo]);
  };

  const handleDelete = id => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };
  return (
    <>
      <SearchForm onSubmit={onSubmit} />
      <Grid>
        {todos.map((todo, index) => (
          <GridItem key={todo.id}>
            <Todo
              onDelete={handleDelete}
              id={todo.id}
              text={todo.text}
              counter={index + 1}
            />
          </GridItem>
        ))}
      </Grid>
    </>
  );
};

import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Grid, GridItem, SearchForm, EditForm, Todo } from 'components';
import { useLocalStorage } from 'hooks/useLocalStorage';

const LS_KEY = 'todos';
export const Todos = () => {
  const [todos, setTodos] = useLocalStorage(LS_KEY, []);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

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

  const handleEdit = todo => {
    setCurrentTodo(todo);
    setIsEditing(prevState => !prevState);
  };

  const onEdit = newText => {
    setTodos(prevState =>
      prevState.map(el =>
        el.id === currentTodo.id ? { ...el, text: newText } : el
      )
    );
  };

  return (
    <>
      {isEditing ? (
        <EditForm
          onEdit={onEdit}
          currentTodo={currentTodo}
          handleEdit={handleEdit}
        />
      ) : (
        <SearchForm onSubmit={onSubmit} />
      )}
      <Grid>
        {todos.map((todo, index) => (
          <GridItem key={todo.id}>
            <Todo
              clickEditBtn={() => handleEdit(todo)}
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

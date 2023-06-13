import { Grid, GridItem, Todo } from 'components';
import { useSelector } from 'react-redux';
import { selectTodos } from 'redux/selectors';

export const TodosList = () => {
  const todos = useSelector(selectTodos);
  //  handleEdit=

  return (
    <Grid>
      {todos.map((todo, index) => (
        <GridItem key={todo.id}>
          <Todo
            // clickEditBtn={() => handleEdit(todo)}

            id={todo.id}
            text={todo.text}
            counter={index + 1}
          />
        </GridItem>
      ))}
    </Grid>
  );
};

import { TodosForm, EditForm, TodosList } from 'components';
import { selectIsEditing, selectIsLoading } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from 'redux/operations';
import { useEffect } from 'react';


export const Todos = () => {
  const isEditing = useSelector(selectIsEditing);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos())
  }, [dispatch])

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {isEditing ? (
        <EditForm/>
      ) : (
        <TodosForm />
      )}
      <TodosList />
    </>
  );
};

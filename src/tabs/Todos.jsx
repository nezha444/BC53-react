import { useState } from 'react';
import { TodosForm, EditForm, TodosList } from 'components';
import { selectIsEditing } from 'redux/selectors';
import { useSelector } from 'react-redux';

export const Todos = () => {
  const isEditing = useSelector(selectIsEditing);

  // const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  const handleEdit = todo => {
    setCurrentTodo(todo);
    // setIsEditing(prevState => !prevState);
  };

  // const onEdit = newText => {
  //   setTodos(prevState =>
  //     prevState.map(el =>
  //       el.id === currentTodo.id ? { ...el, text: newText } : el
  //     )
  //   );
  // };

  return (
    <>
      {isEditing ? (
        <EditForm
          // onEdit={onEdit}
          currentTodo={currentTodo}
          handleEdit={handleEdit}
        />
      ) : (
        <TodosForm />
      )}
      <TodosList />
    </>
  );
};

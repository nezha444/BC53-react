import { Text } from 'components';
import { TodoWrapper, DeleteButton, EditButton } from './Todo.styled';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { addCurrentTodo, setIsEditing } from 'redux/todoSlice';
import { deleteTodo } from 'redux/operations';

export const Todo = ({ id, text, counter }) => {
  const dispatch = useDispatch();
  return (
    <TodoWrapper>
      <Text textAlign="center" marginBottom="20px">
        TODO #{counter}
      </Text>
      <Text>{text}</Text>
      <DeleteButton type="button" onClick={() => dispatch(deleteTodo(id))}>
        <RiDeleteBinLine size={24} />
      </DeleteButton>
      <EditButton
        onClick={() => {
          dispatch(setIsEditing());
          dispatch(addCurrentTodo({ id, text }));
        }}
        type="button"
      >
        <RiEdit2Line size={24} />
      </EditButton>
    </TodoWrapper>
  );
};

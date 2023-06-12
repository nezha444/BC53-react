import { Text } from 'components';
import { TodoWrapper, DeleteButton, EditButton } from './Todo.styled';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { deleteTodos } from 'redux/todoSlice';

export const Todo = ({ id, text, counter, onDelete, clickEditBtn }) => {
  const dispatch = useDispatch();
  return (
    <TodoWrapper>
      <Text textAlign="center" marginBottom="20px">
        TODO #{counter}
      </Text>
      <Text>{text}</Text>
      <DeleteButton type="button" onClick={() => dispatch(deleteTodos(id))}>
        <RiDeleteBinLine size={24} />
      </DeleteButton>
      <EditButton onClick={clickEditBtn} type="button">
        <RiEdit2Line size={24} />
      </EditButton>
    </TodoWrapper>
  );
};

import { RiSaveLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';

import { SearchFormStyled, FormBtn, InputSearch } from 'components';
import { BtnEdit } from './EditForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentTodo } from 'redux/selectors';
import { editTodos, setIsEditing } from 'redux/todoSlice';

export const EditForm = ({ handleEdit }) => {
  const currentTodo = useSelector(selectCurrentTodo);
  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();
    const { edit } = event.target.elements;
    if (edit.value === currentTodo.value) {
      alert(`Edit ${currentTodo.value}`);
      return;
    }
    dispatch(editTodos(edit.value));
    event.target.reset();
    dispatch(setIsEditing());
  };

  return (
    <SearchFormStyled onSubmit={handleSubmit}>
      <BtnEdit onClick={handleEdit} type="button">
        <MdOutlineCancel size="16px" color="red" />
      </BtnEdit>

      <FormBtn type="submit">
        <RiSaveLine size="16px" color="green" />
      </FormBtn>

      <InputSearch
        placeholder="EDIT TODO"
        name="edit"
        required
        defaultValue={currentTodo.text}
        autoFocus
      />
    </SearchFormStyled>
  );
};

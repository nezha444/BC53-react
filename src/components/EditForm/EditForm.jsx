import { RiSaveLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';

import { SearchFormStyled, FormBtn, InputSearch } from 'components';
import { BtnEdit } from './EditForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentTodo } from 'redux/selectors';
import { setIsEditing } from 'redux/todoSlice';
import { editTodo } from 'redux/operations';

export const EditForm = () => {
  const currentTodo = useSelector(selectCurrentTodo);

  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const { edit } = event.target.elements;
    if (edit.value === currentTodo.value) {
      alert(`Edit ${currentTodo.value}`);
      return;
    }
    const newTodo = { text: edit.value, id: currentTodo.id };
    dispatch(editTodo(newTodo));
    event.target.reset();
    dispatch(setIsEditing());
  };

  return (
    <SearchFormStyled onSubmit={handleSubmit}>
      <BtnEdit onClick={() => dispatch(setIsEditing())} type="button">
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

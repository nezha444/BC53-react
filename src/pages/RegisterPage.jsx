import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';

export const RegisterPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const { name, email, password } = e.target.elements;
    const user = {
      name: name.value,
      email: email.value,
      password: password.value,
    };
    dispatch(register(user));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" required />
      <input type="email" name="email" required />
      <input type="password" name="password" required />
      <button type="submit">Sign Up</button>
    </form>
  );
};

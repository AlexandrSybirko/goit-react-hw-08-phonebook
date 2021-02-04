import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import { Form, Button } from 'react-bootstrap';
import s from './Views.module.css';


export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div className={s.form}>
      <h1>Страница логина</h1>

      <Form onSubmit={handleSubmit} autoComplete="off">
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Почта</Form.Label>
    <Form.Control type="email" placeholder="Enter email" name="email"
            value={email}
            onChange={handleChange}/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Пароль</Form.Label>
    <Form.Control type="password" placeholder="Password"  name="password"
            value={password}
            onChange={handleChange}/>
  </Form.Group>
  
  <Button variant="primary" type="submit">
    Войти
  </Button>
</Form>

      
    </div>
  );
}


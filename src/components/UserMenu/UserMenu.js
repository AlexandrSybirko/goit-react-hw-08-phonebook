import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import { Button } from 'react-bootstrap';


const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  
  name: {
    fontWeight: 700,
    marginRight: 12,
    color: 'white',
  },
};

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  

  return (
    <div style={styles.container}>
     
      <span style={styles.name}>Добро пожаловать, {name}</span>
      <Button variant="danger" type="button" onClick={() => dispatch(authOperations.logOut())}>Выйти</Button>
      
    </div>
  );
}
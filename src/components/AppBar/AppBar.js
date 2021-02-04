import { useSelector } from 'react-redux';
import Navigation from './Navigation';
import UserMenu from 'components/UserMenu';
import AuthNav from './AuthNav';
import { authSelectors } from 'redux/auth';
import { Nav, Navbar } from 'react-bootstrap'


export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand>Phonebook</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          
          <Navigation />
        </Nav>
        
        <Nav>
          
      {isLoggedIn ? <UserMenu /> : <AuthNav />}


          
        </Nav>

      </Navbar.Collapse>

    </Navbar>
  );
}




// const styles = {
//   header: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     borderBottom: '1px solid #2A363B',
//   },
// };

// export default function AppBar() {
//   const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
//   return (
//     <header style={styles.header}>
//       <Navigation />
//       {isLoggedIn ? <UserMenu /> : <AuthNav />}
//     </header>
//   );
// }
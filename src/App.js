import { Switch } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Suspense, lazy } from 'react';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { authOperations, authSelectors } from './redux/auth';
import AppBar from 'components/AppBar/AppBar';
import Container from './components/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
const ContactsView = lazy(() => import('./views/ContactsView'));

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  
  
    return (
    
      <Container>
        {isFetchingCurrentUser ? (
        <h1>Показываем React Skeleton</h1>
        ) : (
            <>
    <AppBar />

        <Switch>
          <Suspense fallback={<p>Загружаем...</p>}>
                  <PublicRoute exact path="/">
            <HomeView />
          </PublicRoute>

          <PublicRoute exact path="/register" restricted>
            <RegisterView />
          </PublicRoute>

          <PublicRoute exact path="/login" restricted>
            <LoginView />
          </PublicRoute>

          <PrivateRoute path="/contacts">
            <ContactsView />
          </PrivateRoute>
            </Suspense>
              </Switch>
              </>
        
      )}
      </Container>
    
  );
}


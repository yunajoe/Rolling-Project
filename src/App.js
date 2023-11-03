import { Outlet } from 'react-router';
import Nav from './components/form/Nav/Nav';

const App = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};

export default App;

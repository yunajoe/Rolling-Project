import { Outlet } from 'react-router';
import Header from './components/Header/Header';
import Button from './components/Button/Button';
import binIcon from './images/binIcon.svg';

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Button shape="block" color="outlined" size="40">
        <img src={binIcon} alt="" />
        <span>안녕하세요</span>
      </Button>
    </>
  );
};

export default App;

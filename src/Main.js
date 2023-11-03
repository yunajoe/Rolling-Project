import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Index from './pages/Index';

const Main = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Index />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Main;

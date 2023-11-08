import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Index from "./pages/Index";
import { CardContainer } from "./components/Card/CardContainer/CardContainer";

const Main = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Index />} />
          <Route path="test" element={<CardContainer />} />
          <Route path="test/:id" element={<CardContainer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Main;

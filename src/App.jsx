import { BrowserRouter, Route, Routes } from "react-router-dom";
import RollingPaperPage from "./pages/RollingPaperPage";
import RollingPaperEditPage from "./pages/RollingPaperEditPage";
import LandingPage from "./pages/LandingPage";
import NoPage from "./pages/NoPage";
import CardListPage from "./pages/CardListPage";
import CreateTo from "./pages/CreateTo";
import CreateFrom from "./pages/CreateFrom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="list" element={<CardListPage />} />
        <Route path="post" element={<CreateTo />} />
        <Route path="post/:id" element={<RollingPaperPage />} />
        <Route path="post/:id/edit" element={<RollingPaperEditPage />} />
        <Route path="post/:id/message" element={<CreateFrom />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

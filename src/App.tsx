import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import OlharClinicoPage from "./pages/OlharClinicoPage";
import CurriculoPage from "./pages/CurriculoPage";
import NotFound from "./pages/NotFound";

const App = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/olhar-clinico" element={<OlharClinicoPage />} />
      <Route path="/curriculo" element={<CurriculoPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </HashRouter>
);

export default App;
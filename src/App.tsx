import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./pages/notFound";
import Index from "./pages";

const App = () => {
  return (
    // Aggiungi il return per restituire il JSX
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

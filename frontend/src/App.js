import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import Home from "@/pages/Home";
import CalculatorPage from "@/pages/CalculatorPage";
import { CalcProvider } from "@/lib/calcContext";
import { useLenis } from "@/hooks/useLenis";

function App() {
  useLenis();
  return (
    <CalcProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<CalculatorPage />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="top-center" richColors />
    </CalcProvider>
  );
}

export default App;

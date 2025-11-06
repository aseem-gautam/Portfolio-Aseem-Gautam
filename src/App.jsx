import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/HomePage.jsx";
import { Other } from "./pages/Other.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<Other />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

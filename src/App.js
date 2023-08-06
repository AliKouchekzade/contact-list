import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/layout";
import HomePage from "./pages/homePage";
import AddPage from "./pages/addPage";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add-contact" element={<AddPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

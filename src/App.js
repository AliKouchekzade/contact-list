import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/layout";
import HomePage from "./pages/homePage";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

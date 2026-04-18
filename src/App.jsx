import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import CommandCenter from "./pages/CommandCenter";
import Monitoring from "./pages/Monitoring";
import Alerts from "./pages/Alerts";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout><CommandCenter /></Layout>} />
      <Route path="/monitoring" element={<Layout><Monitoring /></Layout>} />
      <Route path="/alerts" element={<Layout><Alerts /></Layout>} />
    </Routes>
  );
}

export default App;
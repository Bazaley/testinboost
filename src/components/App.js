import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./Layout/Layout";

const Home = lazy(() => import("../pages/Home.jsx"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;

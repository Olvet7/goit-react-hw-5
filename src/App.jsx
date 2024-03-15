import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";

export default function App() {
  return (
    <>
      <h1>Hi React Router Dom</h1>
      <Navigation />
      <Routes>
        <Route path="/" element={<div>Home page</div>} />
        <Route path="/payments" element={<div>Payments page</div>} />
        <Route path="*" element={<div>Opps...Page is not found</div>}/>
      </Routes>
    </>
  );
}

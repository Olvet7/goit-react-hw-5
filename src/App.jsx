import "./App.css";
import {Routes, Route} from 'react-router-dom'

export default function App() {
  return (
    <>
    <h1>Hi React Router Dom</h1>
    <Routes>
      <Route path="/" element={<div>Home page</div>}/>
    </Routes>
    </>
  );
}

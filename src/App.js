import "./App.css";
import { Routes, Route } from "react-router-dom";
import Pages from "./component/Pages";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Pages />} />
      </Routes>
    </>
  );
};
export default App;

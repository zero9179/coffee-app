import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import EmailForm from "./pages/EmailForm";
;
function App() {
  return (
    <>
      {/* <Home/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<EmailForm/>} />
      </Routes>
    </>
  );
}

export default App;

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Homepage/Home";
import AdminHome from "./pages/Admin/AdminHome";
import Summary from "./pages/Admin/Summary";
import Login from "./pages/Admin/Login";
import TokenAssignment from "./pages/Admin/TokenAssignment";
import { Vote } from "./pages/Vote";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/admin">
            <Route index element={<AdminHome />} />
            <Route path="summary" element={<Summary />} />
            <Route path="login" element={<Login />} />
            <Route path="assign" element={<TokenAssignment />} />
          </Route>
          <Route exact path='/vote' element={<Vote/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

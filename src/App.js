import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "../src/pages/SignUp/SignUp";
import SignIn from "../src/pages/SignIn/SignIn";
import Home from "./pages/Home/Home";
import DashBoard from "./pages/DashBoard/DashBoard";

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/register' element={<SignUp />} />
          <Route path='/login' element={<SignIn />} />
          <Route path='/dashboard' element={<DashBoard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

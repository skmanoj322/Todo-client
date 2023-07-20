import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login, { token } from "./Login";
import { useRecoilState } from "recoil";
import Todo from "./Todo";
import NavBar from "./Navbar";

const Home = () => {
  const isToken = useRecoilState(token);

  //   if (isToken[0]) {
  //     useRou;
  //   }
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="" element={<Login />} />
        {/* <Route path="/Todo" element={isToken[0] ? <Todo /> : <Login />} /> */}

        <Route path="/Todo" element={<Todo />} />
      </Routes>
    </Router>
  );
};

export default Home;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login, { token } from "./Login";
import { useRecoilValue } from "recoil";
import Todo from "./Todo";
import NavBar from "./Navbar";

const Home = () => {
  const isToken = useRecoilValue(token);

  console.log(isToken);
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="" element={<Login />} />
        <Route path="/Todo" element={isToken ? <Todo /> : <Login />} />

        {/* <Route path="/Todo" element={<Todo />} /> */}
      </Routes>
    </Router>
  );
};

export default Home;

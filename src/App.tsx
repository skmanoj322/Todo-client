import { CssBaseline } from "@mui/material";
import Home from "./copmonent/Home";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <CssBaseline />
      <Home />
    </RecoilRoot>
  );
}

export default App;

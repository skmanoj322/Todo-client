import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { atom, useRecoilState, useSetRecoilState } from "recoil";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [changeLog, setChangeLog] = useRecoilState(loginState);
  const navigate = useNavigate();

  const setToken = useSetRecoilState(token);

  // const changeInput = useSetRecoilState(input);
  const [input, setInput] = useRecoilState(inputData);
  const changeLogHandler = () => {
    setChangeLog((x) => !x);
  };

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const x = changeLog ? `login` : `register`;
    const url = `http://localhost:3000/api/${x}`;
    const putData = async () => {
      try {
        const response = await axios.post(url, input);
        const token = response?.data?.token;
        localStorage.setItem("token", token);
        console.log(token);
        setToken(token);

        navigate("/Todo");
      } catch (err) {
        console.log(err);
      }
    };
    putData();
  };

  const dataHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {changeLog ? `Login` : `Regester`}
        </Typography>
        <Box
          component="form"
          onSubmit={handleFormSubmit}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            label="Email Address"
            name="username"
            value={input.username}
            onChange={dataHandler}
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            value={input.password}
            onChange={dataHandler}
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link
                onClick={changeLogHandler}
                variant="body2"
                style={{ cursor: "pointer" }}
              >
                {changeLog
                  ? "Don't have an account? Sign Up"
                  : "already have account Login"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
const loginState = atom({
  key: "login",
  default: true,
});

const inputData = atom({
  key: "cred",
  default: {
    username: "",
    password: "",
  },
});
export const token = atom({
  key: "Token",
  default: "",
});

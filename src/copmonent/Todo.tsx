import { Button, Paper, TextField } from "@mui/material";
import TodoStack from "./TodoStack";

const Todo = () => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Paper
          elevation={3}
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "40%",
            justifyContent: "space-between",
            m: 4,
            p: 4,
          }}
        >
          <TextField
            size="small"
            sx={{ alignContent: "end" }}
            placeholder="Todo"
          />
          <Button
            variant="contained"
            size="small"
            sx={{ fontSize: "12px", height: "50%", m: 1 }}
          >
            Add todo
          </Button>
        </Paper>
      </div>
      <TodoStack />
    </>
  );
};
export default Todo;

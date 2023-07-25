import { Paper, Typography, Button } from "@mui/material";
import axios from "axios";
import { BASE_URL } from "../config";
const TodoItem = (props: any) => {
  const deleteHandler = async () => {
    await axios.delete(`${BASE_URL}/deletetodo`, {
      data: { id: props.items._id },
      headers: { Authorization: "Bearer " + localStorage.getItem("token") },
    });
  };
  const completeHandler = async () => {
    await axios.put(
      `${BASE_URL}/edittodo`,
      { id: props.items._id, done: true },
      { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }
    );
  };
  return (
    <Paper
      elevation={3}
      sx={{ width: "40%", display: "flex", flexDirection: "row" }}
    >
      <Typography
        variant="h6"
        sx={{
          width: "70%",
          textAlign: "center",
        }}
        // component={Paper}
      >
        {props.items.done ? <s>{props.items.todo}</s> : `${props.items.todo}`}
      </Typography>
      <Button
        variant="contained"
        size="small"
        sx={{ fontSize: "10px", height: "50%", m: 1 }}
        onClick={completeHandler}
      >
        Completed
      </Button>
      <Button
        variant="contained"
        size="small"
        sx={{ fontSize: "10px", height: "50%", m: 1 }}
        onClick={deleteHandler}
      >
        Delete
      </Button>
    </Paper>
  );
};
export default TodoItem;

import { Button, Paper, TextField } from "@mui/material";
import TodoStack from "./TodoStack";

import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../config";

const Todo = () => {
  const [data, setData] = useState("");

  const getData = (event: any) => {
    setData(event.target.value);
  };
  const inputHandler = async (event: any) => {
    event.preventDefault();
    try {
      axios.post(
        `${BASE_URL}/addTodo`,
        { todo: data },
        {
          // method: "POST",
          headers: { Authorization: "Bearer " + localStorage.getItem("token") },
        }
      );
    } catch (err) {
      console.log(err);
    }
    setData("");
  };

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
          component="form"
          onSubmit={inputHandler}
        >
          <TextField
            size="small"
            sx={{ alignContent: "end" }}
            onChange={getData}
            value={data}
            name="data"
            placeholder="Todo"
          />
          <Button
            variant="contained"
            size="small"
            sx={{ fontSize: "12px", height: "50%", m: 1 }}
            onClick={inputHandler}
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

import { Stack } from "@mui/material";
import TodoItem from "./TodoItem";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { TodoData } from "./atom";
import { useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../config";
const TodoStack = () => {
  const todoList = useRecoilValue(TodoData);
  const setTask = useSetRecoilState(TodoData);
  useEffect(() => {
    axios
      .get(`${BASE_URL}/users`, {
        method: "GET",
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      })
      .then((res) => {
        setTask(res.data);
      });
  }, [todoList]);

  return (
    <div>
      <Stack spacing={2} sx={{ alignItems: "center" }}>
        {todoList.map((todo) => {
          return <TodoItem items={todo} />;
        })}
      </Stack>
    </div>
  );
};
export default TodoStack;

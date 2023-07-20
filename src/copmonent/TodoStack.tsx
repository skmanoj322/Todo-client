import { Stack } from "@mui/material";
import TodoItem from "./TodoItem";
const TodoStack = () => {
  return (
    <div>
      <Stack spacing={2} sx={{ alignItems: "center" }}>
        <TodoItem items={"sadsakdsakdn manoj"} />
      </Stack>
    </div>
  );
};
export default TodoStack;

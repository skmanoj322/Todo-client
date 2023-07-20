import { Paper, Typography, Button } from "@mui/material";
const TodoItem = (props: any) => {
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
        {props.items}
      </Typography>
      <Button
        variant="contained"
        size="small"
        sx={{ fontSize: "10px", height: "50%", m: 1 }}
      >
        Completed
      </Button>
    </Paper>
  );
};
export default TodoItem;

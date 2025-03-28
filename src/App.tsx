import React, { useState } from "react";
import { Container, CssBaseline, Typography, Box } from "@mui/material";
import ToDoList from "./ToDoList";

function App() {
  const [tasks, setTasks] = useState<string[]>([]);

  return (
    <Container
      maxWidth="sm"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f4f8", // Soft grayish-blue background
        padding: 4,
      }}
    >
      <CssBaseline />
      <Box sx={{ textAlign: "center", mb: 3 }}>
        <Typography variant="h4" fontWeight="bold" color="primary">
          My To-Do List
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Stay productive with a clear task list!
        </Typography>
      </Box>

      <ToDoList tasks={tasks} setTasks={setTasks} />
    </Container>
  );
}

export default App;
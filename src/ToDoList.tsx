import React, { useState } from "react";
import { TextField, Button, List, ListItem, ListItemText, IconButton, Paper, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

type ToDoListProps = {
  tasks: string[];
  setTasks: (tasks: string[]) => void;
};

const ToDoList = ({ tasks, setTasks }: ToDoListProps) => {
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const removeTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <Paper elevation={6} sx={{ p: 4, width: "100%", maxWidth: 500, mt: 5, borderRadius: 2, backgroundColor: "#f9f9f9" }}>
      <Box display="flex" gap={2}>
        <TextField
          fullWidth
          label="Enter a new task..."
          variant="outlined"
          value={newTask}
          onChange={handleInputChange}
        />
        <Button variant="contained" color="primary" onClick={addTask}>
          Add
        </Button>
      </Box>

      <List sx={{ mt: 3 }}>
        {tasks.map((task, index) => (
          <ListItem key={index} sx={{ backgroundColor: "#ffffff", mb: 2 }} secondaryAction={
            <IconButton edge="end" color="error" onClick={() => removeTask(index)}>
              <DeleteIcon />
            </IconButton>
          }>
            <ListItemText primary={task} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default ToDoList;

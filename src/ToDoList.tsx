import React, { useEffect, useState } from 'react';
import { TextField, Button, List, ListItem, ListItemText, IconButton, Paper, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

type ToDoListProps = {
  tasks: string[];
  setTasks: (tasks: string[]) => void;
};



const ToDoList = ({ tasks, setTasks }: ToDoListProps) => {
  const [newTask, setNewTask] = useState("");




  // Load tasks from Local Storage when the component mounts
  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  // Save tasks to Local Storage whenever they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);


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
      {/* Input & Button Section */}
      <Box display="flex" gap={2}>
        <TextField
          fullWidth
          label="Enter a new task..."
          variant="outlined"
          value={newTask}
          onChange={handleInputChange}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: 2,
              "&:hover fieldset": {
                borderColor: "#1976d2", // Focus border color
              },
              "&.Mui-focused fieldset": {
                borderColor: "#1976d2", // Focus border color
              },
            },
          }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={addTask}
          sx={{
            height: "100%",
            padding: "12px 24px",
            borderRadius: 2,
            "&:hover": {
              backgroundColor: "#1565c0", // Hover color for button
            },
          }}
        >
          Add
        </Button>
      </Box>

      {/* Task List */}
      <List sx={{ mt: 3 }}>
        {tasks.map((task, index) => (
          <ListItem
            key={index}
            sx={{
              backgroundColor: "#ffffff",
              padding: "12px 16px",
              borderRadius: 1,
              marginBottom: 2,
              boxShadow: 1,
              "&:hover": {
                backgroundColor: "#e3f2fd", // Hover background for task
              },
            }}
            secondaryAction={
              <IconButton edge="end" color="error" onClick={() => removeTask(index)}>
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemText
              primary={task}
              sx={{
                color: "#333333", // Text color for task
                fontSize: "16px",
                fontWeight: 500,
              }}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default ToDoList;
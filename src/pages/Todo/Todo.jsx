import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import { appSelector, appActions } from "../redux/appRedux";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Todo = () => {
  const dispatch = useDispatch();
  const todo = useSelector(appSelector.todo);
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleChecked = (e, id) => {
    dispatch(appActions.setCompletedTodo({ id, completed: e.target.checked }));
  };
  const delTask = async (id) => {
    dispatch(appActions.deleteTodo(id));
    toast.error("Tarea eliminada con exito", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const addTask = async () => {
    dispatch(appActions.addTodo({ text: text, id: uuid() }));
    await setText((prev) => "");
    toast.success("Tarea agregada con exito", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <ToastContainer />
      <Paper
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",

          mt: "100px",
        }}
      >
        <Card sx={{ width: "100%" }}>
          <CardHeader sx={{ textAlign: "center" }} title="Agrega una tarea" />
          <CardContent sx={{ marginBottom: "20px" }}>
            <Stack
              sx={{
                display: "flex",
                gap: "40px",
                justifyContent: "space-around",
                alignItems: "center",
                width: "100%",
              }}
              direction="row"
            >
              <TextField
                sx={{ bgcolor: "#173247", width: "30%" }}
                id="filled-basic"
                value={text}
                label="tarea"
                variant="filled"
                onChange={handleChange}
              />
              <Button
                disabled={!text}
                endIcon={<AddIcon />}
                variant="contained"
                sx={{ bgcolor: "#173247" }}
                onClick={() => addTask()}
              >
                Agregar
              </Button>
            </Stack>
          </CardContent>
        </Card>

        <Card sx={{ bgcolor: "#173247", width: "100%" }}>
          <CardHeader title="Tareas" sx={{ textAlign: "center" }} />
          <CardContent>
            {todo.map((t, index) => (
              <Stack
                key={t.id}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  pb: "0px",
                }}
                direction="row"
              >
                <Grid
                  item
                  md={1}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Checkbox
                    color="success"
                    checked={t.completed}
                    onChange={(e) => handleChecked(e, t.id)}
                  />

                  <Typography
                    sx={{ fontSize: 18, fontWeight: 700, marginLeft: "0px" }}
                  >
                    {t.text}
                  </Typography>
                </Grid>
                <Grid item md={2}>
                  <Button
                    color="error"
                    startIcon={<DeleteIcon />}
                    variant="contained"
                    onClick={() => delTask(t.id)}
                  >
                    Eliminar
                  </Button>
                </Grid>
              </Stack>
            ))}
          </CardContent>
        </Card>
      </Paper>
    </Box>
  );
};

export default Todo;

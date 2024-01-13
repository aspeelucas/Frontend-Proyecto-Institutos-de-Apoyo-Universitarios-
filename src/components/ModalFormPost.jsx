import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { CardContent, TextField } from "@mui/material";
import { toast } from "react-toastify";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  background: "primary.main",
  borderRadius: "20px",
};

export default function ModalFormPost({
  buttonText = `Open Modal`,
  institute,
  fetchInstitutes,
  buttonStyle = "light",
}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const isEdit = Boolean(institute);
  const initialFormValues = {
    nombre: "",
    descripcion: "",
    img: "",
    direccion: "",
    telefono: "",
    email: "",
    coordenadas: {
      latitud: "",
      longitud: "",
    },
  };
  const [formData, setFormData] = useState(initialFormValues);
  useEffect(() => {
    if (isEdit) {
      setFormData({
        nombre: institute.nombre,
        descripcion: institute.descripcion,
        img: institute.img,
        direccion: institute.direccion,
        telefono: institute.telefono,
        email: institute.email,
        coordenadas: {
          latitud: institute.coordenadas.latitud,
          longitud: institute.coordenadas.longitud,
        },
      });
    }
  }, [isEdit, institute]);

  const handleChange = (e) => {
    if (e.target.name !== "latitud" && e.target.name !== "longitud") {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    } else {
      setFormData({
        ...formData,
        coordenadas: {
          ...formData.coordenadas,
          [e.target.name]: e.target.value,
        },
      });
    }
  };

  const handleReset = () => {
    setFormData(initialFormValues);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = isEdit
        ? await axios.patch(
            `http://localhost:3000/places/${institute.id}`,
            formData,
            {
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
            }
          )
        : await axios.post("http://localhost:3000/places", formData, {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          });
      console.log("Datos enviados correctamente:", response.data);
      handleReset();
      await fetchInstitutes();
      return toast.success("Se agrego con exito el instituto", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      console.error("Error al enviar datos a la API:", error.message);
      return toast.error("Error al enviar datos. Revisa los campos", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const buttonColors = {
    light: {
      color: "white",
      backgroundColor: "primary.main",
      fontSize: "20px",
      ":hover": { color: "primary.main" },
    },
    dark: {
      color: "primary.main",
      backgroundColor: "white",
      borderRadius: "5px",
      fontSize: "13px",
      ":hover": { color: "white" ,backgroundColor:"rgba(7, 20, 102, 0.95)"},
    },
  };

  return (
    <div>
      <Button
        variant="outlined"
        size="small"
        sx={buttonColors[buttonStyle]}
        onClick={handleOpen}
      >
        {buttonText}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            align="center"
            fontSize={40}
          >
            {isEdit ? `Editar` : `Agregar un nuevo`} Instituto
          </Typography>
          <form onSubmit={handleSubmit}>
            <CardContent>
              <TextField
                sx={{ width: "100%" }}
                error={false}
                type="text"
                id="outlined-basic"
                value={formData.nombre}
                label="Nombre del Instituto"
                helperText="Campo Obligatorio"
                variant="outlined"
                onChange={handleChange}
                name="nombre"
              />
            </CardContent>
            <CardContent>
              <TextField
                error={false}
                type="text"
                sx={{ width: "100%" }}
                id="outlined-basic"
                label="Descripcion"
                value={formData.descripcion}
                helperText="Campo Obligatorio"
                onChange={handleChange}
                variant="outlined"
                name="descripcion"
              />
            </CardContent>
            <CardContent>
              <TextField
                error={false}
                type="url"
                sx={{ width: "100%" }}
                id="outlined-basic"
                value={formData.img}
                label="URL de Imagen"
                onChange={handleChange}
                helperText="Campo Obligatorio"
                variant="outlined"
                name="img"
              />
            </CardContent>
            <CardContent>
              <TextField
                error={false}
                type="number"
                sx={{ width: "100%" }}
                id="outlined-basic"
                value={formData.telefono}
                label="Telefono"
                onChange={handleChange}
                helperText="Campo Obligatorio"
                variant="outlined"
                name="telefono"
              />
            </CardContent>
            <CardContent>
              <TextField
                error={false}
                type="email"
                sx={{ width: "100%" }}
                id="outlined-basic"
                value={formData.email}
                label="Email"
                onChange={handleChange}
                helperText="Campo Obligatorio"
                variant="outlined"
                name="email"
              />
            </CardContent>
            <CardContent>
              <TextField
                error={false}
                type="text"
                sx={{ width: "100%" }}
                id="outlined-basic"
                value={formData.direccion}
                label="Direccion"
                onChange={handleChange}
                helperText="Campo Obligatorio"
                variant="outlined"
                name="direccion"
              />
            </CardContent>
            <Box>
              <Typography align="center">Ubicacion en Coordenadas</Typography>
              <CardContent
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <TextField
                  error={false}
                  type="number"
                  id="outlined-basic"
                  label="Latitud"
                  onChange={handleChange}
                  value={formData.coordenadas.latitud}
                  helperText="Campo Obligatorio"
                  variant="outlined"
                  name="latitud"
                />
                <TextField
                  error={false}
                  type="number"
                  id="outlined-basic"
                  label="Longitud"
                  onChange={handleChange}
                  value={formData.coordenadas.longitud}
                  helperText="Campo Obligatorio"
                  variant="outlined"
                  name="longitud"
                />
              </CardContent>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Button
                variant="contained"
                color="success"
                disabled={
                  formData.nombre === "" ||
                  formData.descripcion === "" ||
                  formData.img === "" ||
                  formData.coordenadas.latitud === "" ||
                  formData.coordenadas.longitud === ""||
                  formData.direccion === ""||
                  formData.email === ""||
                  formData.telefono === ""
                }
                type="submit"
              >
                {isEdit ? `Editar` : `Agregar`} Instituto
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>
    </div>
  );
}

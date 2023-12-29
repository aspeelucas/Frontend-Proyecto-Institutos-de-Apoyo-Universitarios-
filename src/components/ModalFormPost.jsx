import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { CardContent, TextField } from "@mui/material";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ModalFormPost() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const initialFormValues = {
    nombre: "",
    descripcion: "",
    img: "",
    coordenadas: {
      latitud: "",
      longitud: "",
    },
  };
  const [formData, setFormData] = useState(initialFormValues);
  
  

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
      const response = await axios.post(
        "http://localhost:3000/places",
        formData,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      // La solicitud fue exitosa, puedes manejar la respuesta aquí
      console.log("Datos enviados correctamente:", response.data);
      handleReset();
      handleClose();
    } catch (error) {
      // La solicitud falló, manejar el error
      console.error("Error al enviar datos a la API:", error.message);
    }
  };

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Agregar Instituto
          </Typography>
          <form onSubmit={handleSubmit}>
            <CardContent>
              <TextField
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
                type="text"
                id="outlined-basic"
                value={formData.img}
                label="Url de Imagen"
                onChange={handleChange}
                helperText="Campo Obligatorio"
                variant="outlined"
                name="img"
              />
            </CardContent>
            <Box>
              <Typography>Ubicacion</Typography>
              <CardContent>
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
              </CardContent>
              <CardContent>
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
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Button variant="contained" color="success"disabled={formData.nombre === "" || formData.descripcion === "" || formData.img === "" || formData.coordenadas.latitud === "" || formData.coordenadas.longitud === ""}
               type="submit">
                Success
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>
    </div>
  );
}

{
  /* <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Agregar Instituto
          </Typography>
          <CardContent>
            <TextField
              error={false}
              type="text"
              id="outlined-basic"
              
              label="Nombre del Instituto"
              helperText="Campo Obligatorio"
              variant="outlined"
              name="nombre-instituto"
            />
          </CardContent>
          <CardContent>
            <TextField
              error={false}
              type="text"
              id="outlined-basic"
              label="Descripcion"
              helperText="Campo Obligatorio"
              variant="outlined"
              name="descripcion-instituto"
            />
          </CardContent>
          <CardContent>
            <TextField
              error={false}
              type="url"
              id="outlined-basic"
              label="Url de Imagen"
              helperText="Campo Obligatorio"
              variant="outlined"
              name="img-instituto"
            />
          </CardContent>
          <Box>
            <Typography>Ubicacion</Typography>
            <CardContent>
              <TextField
                error={false}
                type="number"
                id="outlined-basic"
                label="Latitud"
                helperText="Campo Obligatorio"
                variant="outlined"
                name="nombre-instituto"
              />
            </CardContent>
            <CardContent>
              <TextField
                error={false}
                type="number"
                id="outlined-basic"
                label="Longitud"
                helperText="Campo Obligatorio"
                variant="outlined"
                name="nombre-instituto"
              />
            </CardContent>
          </Box>
          <Box sx={{display:"flex" , justifyContent:"center"}}>
            <Button variant="contained" color="success">
              Success
            </Button>
          </Box>
        </Box>
      </Modal> */
}

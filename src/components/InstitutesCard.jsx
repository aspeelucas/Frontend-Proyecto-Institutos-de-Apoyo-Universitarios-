import { Box } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";
import ModalFormPost from "./ModalFormPost";
import ModalMap from "./ModalMap";
import ModalContacto from "./ModalContacto";
import { appActions } from "../pages/redux/appRedux";


const InstitutesCard = ({ institutes, fetchInstitutes }) => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const dispatch = useDispatch();

  const handleDelete = async (id) => {
    try {
      dispatch(appActions.loading(true));
      const response = await axios.delete(`http://localhost:3000/places/${id}`);
      console.log(response);
      await fetchInstitutes();
      handleClose();
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(appActions.loading(false));
    }
  };

  return institutes.map((institute, id) => (
    <Box
      key={id}
      sx={{
        marginTop: "70px",
      }}
    >
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          maxWidth: "550px",
          minWidth: "550px",
          height: "700px",
          marginTop: "60px",
          transition: "0.2s",
          "&:hover": {
            transform: "scale(1.05)",
          },
        }}
        key={institute.id}
      >
        <CardMedia
          sx={{ height: 400, width: "100%", objectFit: "cover" }}
          image={institute.img}
          title="green iguana"
        />
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
          }}
        >
          <Typography gutterBottom variant="h5" component="div">
            {institute.nombre}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {institute.descripcion}
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 4,
            marginBottom: 10,
          }}
        >
          <ModalMap
            institute={institute}
            buttonText="Mapa"
            buttonStyle="dark"
          />
          <ModalContacto
            institute={institute}
            buttonText="Contacto"
            buttonStyle="dark"
          />
          <ModalFormPost
            institute={institute}
            fetchInstitutes={fetchInstitutes}
            buttonText="Editar"
            buttonStyle="dark"
          />

          <Box>
            <React.Fragment>
              <Button
                variant="outlined"
                size="small"
                sx={{
                  color: "black",
                  background: "white",
                  ":hover": { color: "white", backgroundColor: "red" },
                }}
                onClick={handleClickOpen}
              >
                BORRAR
              </Button>
              <Dialog
                sx={{ opacity: "0.70", transition: "0.1s" }}
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  {"Esta seguro que desea eliminar este instituto?"}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    Si elimina este instituto no podra recuperarlo.
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button
                    variant="outlined"
                    size="small"
                    sx={{ color: "black", background: "white" }}
                    onClick={() => handleDelete(institute.id)}
                  >
                    CONFIRMAR
                  </Button>
                  <Button
                    variant="outlined"
                    size="small"
                    sx={{ color: "black", background: "white" }}
                    onClick={handleClose}
                    autoFocus
                  >
                    CANCELAR
                  </Button>
                </DialogActions>
              </Dialog>
            </React.Fragment>
          </Box>
        </CardActions>
      </Card>
    </Box>
  ));
};

export default InstitutesCard;

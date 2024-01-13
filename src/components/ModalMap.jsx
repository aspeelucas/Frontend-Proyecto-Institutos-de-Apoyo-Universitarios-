import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Icon } from "leaflet";
import { MapContainer, TileLayer,Marker,Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import AddLocationIcon from "@mui/icons-material/AddLocation";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 2,
  background: "primary.main",
  borderRadius: "20px",
};

export default function ModalMap({
  buttonText = `Open Modal`,
  institute,
  buttonStyle = "light",
}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const customIcon = new Icon ({
    iconUrl: "/oficina.png",
    iconSize: [38, 38],
  })

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
      ":hover": { color: "white", backgroundColor: "rgba(7, 20, 102, 0.95)" },
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
            <AddLocationIcon sx={{ fontSize: "30px" }} />
            Ubicacion del instituto:
          </Typography>
          <MapContainer
            
            center={[institute?.coordenadas?.latitud, institute?.coordenadas?.longitud]}
            zoom={17}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker
             icon={customIcon}
             position={[institute?.coordenadas?.latitud, institute?.coordenadas?.longitud]}>
              <Popup>
               {institute.nombre}
              </Popup>
            </Marker>
          </MapContainer>
        </Box>
      </Modal>
    </div>
  );
}

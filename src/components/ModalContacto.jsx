import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import LocalPhone from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
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

export default function ModalContacto({
  buttonText = `Open Modal`,
  institute,
  buttonStyle = "light",
}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
            <ImportContactsIcon sx={{ fontSize: "30px" }} /> Contacto:
          </Typography>
          <Box>
            <Typography
              id="modal-modal-description"
              sx={{
                mt: 2,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 1,
              }}
              align="center"
              fontSize={20}
            >
              <LocalPhone />
              <b>Telefono:</b> {institute?.telefono}
            </Typography>
            <Typography
              id="modal-modal-description"
              sx={{
                mt: 2,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 1,
              }}
              align="center"
              fontSize={20}
            >
              {" "}
              <EmailIcon />
              <b>Email:</b> {institute?.email}
            </Typography>
            <Typography
              id="modal-modal-description"
              sx={{
                mt: 2,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 1,
              }}
              align="center"
              fontSize={20}
            >
              <AddLocationIcon />
              <b>Direccion:</b> {institute?.direccion}
            </Typography>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

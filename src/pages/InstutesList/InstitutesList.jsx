import { useEffect } from "react";
import InstitutesCard from "../../components/InstitutesCard";
import ModalFormPost from "../../components/ModalFormPost";
import { Box } from "@mui/material";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { appActions, appSelector } from "../redux/appRedux";
import HeaderInstitutesList from "../../components/HeaderInstitutesList";

export const getInstitutes = async () => {
  try {
    const response = await axios.get("http://localhost:3000/places");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
const InstitutesList = () => {
  const dispatch = useDispatch();
  const institutes = useSelector(appSelector.institutes);
  const fetchInstitutes = async () => {
    const response = await getInstitutes();
    dispatch(appActions.setInstitutes(response));
  };
  useEffect(() => {
    fetchInstitutes();
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <HeaderInstitutesList />
      <ModalFormPost
        fetchInstitutes={fetchInstitutes}
        buttonText="Crear Nuevo Instituto"
        buttonStyle="light"
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          maxWidth: "100%",
          flexDirection: "row",
          flexWrap: "wrap",
          marginBottom: "250px",
        }}
      >
        <InstitutesCard
          institutes={institutes}
          fetchInstitutes={fetchInstitutes}
        />
      </Box>
    </Box>
  );
};

export default InstitutesList;

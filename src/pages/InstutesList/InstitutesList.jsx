import React from 'react';
import InstitutesCard from '../../components/InstitutesCard';
import ModalFormPost from '../../components/ModalFormPost';
import { Box } from '@mui/material';

const InstitutesList = () => {
  return (
    <Box>
      <ModalFormPost />
      <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",gap:4,maxWidth:"100%",flexDirection:"row", flexWrap:"wrap"}}>
        <InstitutesCard />
      </Box>
    </Box>
  );
}

export default InstitutesList;


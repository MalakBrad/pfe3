import {  Button, Container, Stack, Typography } from "@mui/material";
import Iconify from "src/components/iconify";



export default function ProductsView() { 
  return(
  <Container>
  <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
   <Typography variant="h4">Dernier produit commercialisé</Typography>
     <Button onClick={()=> setShowAddNewAction(!showAddNewAction)} variant="contained" color="inherit" startIcon={<Iconify icon="eva:plus-fill" />}>
          Ajouter KPI
     </Button>
   </Stack>
  </Container>         
  );

}

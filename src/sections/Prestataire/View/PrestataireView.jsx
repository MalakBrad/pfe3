import {  Button, Container, Stack, Typography } from "@mui/material";
import Iconify from "src/components/iconify";
import UserTableHead from "src/sections/user/user-table-head";

export default function PrestataireView() { 
  return(
     <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
              <Typography variant="h4"> Évaluation des Prestataires </Typography>
             <Button onClick={()=> setShowAddNewAction(!showAddNewAction)} variant="contained" color="inherit" startIcon={<Iconify icon="eva:plus-fill" />}>
                 Ajout Fournisseur
             </Button>
        </Stack>
         <UserTableHead         
          headLabel={[
              { id: 'Fournisseurs', label: 'Fournisseurs' },
              { id: 'Inter/Externe', label: 'Inter/Externe' },
              { id: "Raison d'intérêt", label: "Raison d'intérêt" },
              { id: 'Mode de maîtrise', label: 'Mode de maîtrise' },
              { id: 'Evaluation', label: 'Evaluation '},
              { id: 'Incient constatés', label: 'Incient constaté'},
              { id: 'degré satisfaction global', label: 'degré satisfaction global'},
         ]}
          />
    </Container>         
  );
}
import Container from '@mui/material/Container';
import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Iconify from 'src/components/iconify/iconify';
import Scrollbar from 'src/components/scrollbar';
import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import {users} from "src/utils/data";  
import { Dialog, Checkbox, TextField, DialogTitle, DialogContent, DialogActions, FormControlLabel, TableContainer } from '@mui/material';
import UserTableToolbar from 'src/sections/user/user-table-toolbar';
import TableNoData from 'src/sections/user/table-no-data';
import TableEmptyRows from 'src/sections/user/table-empty-rows';
import UserTableRow from 'src/sections/user/user-table-row';
import UserTableHead from 'src/sections/user/user-table-head';
import TableBody from '@mui/material/TableBody';
import {emptyRows, applyFilter, getComparator } from 'src/sections/user/utils';
import TablePagination from '@mui/material/TablePagination';


// ----------------------------------------------------------------------


export default function PlanactionsPage() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const [showAddNewAction, setShowAddNewAction] = useState(false);
  const [NewActionName, setNewActionName] = useState('');
  const [NewActionCompany, setNewActionCompany] = useState('');
  const [NewActionRole, setNewActionRole] = useState('');
  const [NewActionVerified, setNewActionVerified] = useState(false);
  const [NewActionActive, setNewActionActive] = useState(true);
  const [selected, setSelected] = useState([]);
  const [filterName, setFilterName] = useState('');
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('name');

  const handleFilterByName = (event) => {
    setPage(0);
    setFilterName(event.target.value);
  };
  const dataFiltered = applyFilter({
    inputData: users,
    comparator: getComparator(order, orderBy),
    filterName,
  }); 
  const notFound = !dataFiltered.length && !!filterName;

  
  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = users.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);



  };

  const handleSort = (event, id) => {
    const isAsc = orderBy === id && order === 'asc';
    if (id !== '') {
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(id);
    }
  }; 
  const handleCloseAddUserForm = () => {
    setShowAddNewAction(false);
  };

  const handleNewActionNameChange = (event) => {
    setNewActionName(event.target.value);
  };

  const handleNewActionCompanyChange = (event) => {
    setNewActionCompany(event.target.value);
  };

  const handleNewActionRoleChange = (event) => {
    setNewActionRole(event.target.value);
  };


  const handleAddUser = () => {
    // Implement logic to add New Action using the form data
    // Example:
    const NewAction = {
      id: Math.random(),
      name: NewActionName,
      company: NewActionCompany,
      Action: NewActionRole,
      isVerified: NewActionVerified,
      isActive: NewActionActive,
    };
    
    console.log(NewAction)
    console.log(users);
    users.push(NewAction);
    console.log(users)

    // Update the users state with the New Action
    //setUsers([...users, NewAction]);

    // Clear the input fields
    setNewActionName('');
    setNewActionCompany('');
    setNewActionRole('');

    // Close the add user form dialog
    setShowAddNewAction(false);
  };

  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">Plan d'Action</Typography>
        <Button onClick={()=> setShowAddNewAction(!showAddNewAction)} variant="contained" color="inherit" startIcon={<Iconify icon="eva:plus-fill" />}>
          Ajouter une Action
          </Button>
      </Stack>
      <Card>
          <UserTableToolbar
              numSelected={selected.length}
              filterName={filterName}
              onFilterName={handleFilterByName}
          />

          <Scrollbar>
            <TableContainer sx={{ overflow: 'unset' }}>
              <Table sx={{ minWidth: 800 }}>
                <UserTableHead
                    order={order}
                    orderBy={orderBy}
                    rowCount={users.length}
                    numSelected={selected.length}
                    onRequestSort={handleSort}
                    onSelectAllClick={handleSelectAllClick}
                    headLabel={[
                      
                      { id: 'Acteur', label: 'Acteur' },
                      { id: 'Problème', label: 'Problème' },
                      { id: 'Action', label: 'Action' },
                      { id: 'Echéance', label: 'Echéance' },
                      { id: "Progression de l'action", label: "Progression de l'action"},
                    ]}
                />
                <TableBody>
                  {dataFiltered
                      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                      .map((row) => (
                          <UserTableRow
                              key={row.id}
                              name={row.name}
                              Action={row.Action}
                              Echéance={row.Echéance}
                              Progression de laction={row.Avancement}
                              avatarUrl={row.avatarUrl}
                             
                              selected={selected.indexOf(row.name) !== -1}
                              handleClick={(event) => handleClick(event, row.name)}
                          />
                      ))}

                  <TableEmptyRows
                      height={77}
                      emptyRows={emptyRows(page, rowsPerPage, users.length)}
                  />

                  {notFound && <TableNoData query={filterName} />}
                </TableBody>
              </Table>
            </TableContainer>
          </Scrollbar>

          <TablePagination
              page={page}
              component="div"
              count={users.length}
              rowsPerPage={rowsPerPage}
              onPageChange={handleChangePage}
              rowsPerPageOptions={[5, 10, 25, 50, 100]}
              onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Card>
      { showAddNewAction && <Dialog open={showAddNewAction} onClose={()=> setShowAddNewAction(false)}>
          <DialogTitle> Nouvelle action </DialogTitle>
          <DialogContent>
            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Acteur"
                type="text"
                fullWidth
                value={NewActionName}
                onChange={handleNewActionNameChange}
            />
            <TextField
                margin="dense"
                label="Problème"
                type="text"
                fullWidth
                value={NewActionCompany}
                onChange={handleNewActionCompanyChange}
            />
            <TextField
                margin="dense"
                id="Action"
                label="Action"
                type="text"
                fullWidth
                value={NewActionRole}
                onChange={handleNewActionRoleChange}
            />
           
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseAddUserForm}>Annuler</Button>
            <Button onClick={handleAddUser} color="primary">Ajouter</Button>
          </DialogActions>
        </Dialog> }
    </Container>)
    
  }


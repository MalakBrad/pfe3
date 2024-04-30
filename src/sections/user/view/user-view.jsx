import { useState } from 'react';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TableBody from '@mui/material/TableBody';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import { Dialog, Checkbox, TextField, DialogTitle, DialogContent, DialogActions, FormControlLabel } from '@mui/material';


import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar';

import TableNoData from '../table-no-data';
import UserTableRow from '../user-table-row';
import UserTableHead from '../user-table-head';
import TableEmptyRows from '../table-empty-rows';
import UserTableToolbar from '../user-table-toolbar';
import { emptyRows, applyFilter, getComparator } from '../utils';
// eslint-disable-next-line import/no-unresolved
import {users} from "src/utils/data";


export default function UserPage() {
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState('asc');
  const [selected, setSelected] = useState([]);
  const [orderBy, setOrderBy] = useState('name');
  const [filterName, setFilterName] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [showAddNewUser, setShowAddNewUser] = useState(false);
  const [newUserName, setNewUserName] = useState('');
  const [newUserCompany, setNewUserCompany] = useState('');
  const [newUserRole, setNewUserRole] = useState('');
  const [newUserVerified, setNewUserVerified] = useState(false);
  const [newUserActive, setNewUserActive] = useState(true);

  const handleSort = (event, id) => {
    const isAsc = orderBy === id && order === 'asc';
    if (id !== '') {
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(id);
    }
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = users.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
          selected.slice(0, selectedIndex),
          selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

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

  const handleCloseAddUserForm = () => {
    setShowAddNewUser(false);
  };

  const handleNewUserNameChange = (event) => {
    setNewUserName(event.target.value);
  };

  const handleNewUserCompanyChange = (event) => {
    setNewUserCompany(event.target.value);
  };

  const handleNewUserRoleChange = (event) => {
    setNewUserRole(event.target.value);
  };

  const handleNewUserVerifiedChange = (event) => {
    setNewUserVerified(event.target.checked);
  };

  const handleNewUserActiveChange = (event) => {
    setNewUserActive(event.target.checked);
  };

  const handleAddUser = () => {
    // Implement logic to add new user using the form data
    // Example:
    const newUser = {
      id: Math.random(),
      name: newUserName,
      company: newUserCompany,
      role: newUserRole,
      isVerified: newUserVerified,
      isActive: newUserActive,
    };

    console.log(newUser)
    console.log(users);
    users.push(newUser);
    console.log(users)

    // Update the users state with the new user
    //setUsers([...users, newUser]);

    // Clear the input fields
    setNewUserName('');
    setNewUserCompany('');
    setNewUserRole('');
    setNewUserVerified(false);
    setNewUserActive(true);

    // Close the add user form dialog
    setShowAddNewUser(false);
  };

  return (
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4">Utilisateurs</Typography>

          <Button onClick={()=> setShowAddNewUser(!showAddNewUser)} variant="contained" color="inherit" startIcon={<Iconify icon="eva:plus-fill" />}>
            Nouveau Utilisateur 
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
                      { id: 'name', label: 'Nom' },
                      { id: 'company', label: 'Site de travail' },
                      { id: 'role', label: 'Fonction' },
                      { id: 'status', label: 'Statut' },
                      { id: '' },
                    ]}
                />
                <TableBody>
                  {dataFiltered
                      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                      .map((row) => (
                          <UserTableRow
                              key={row.id}
                              name={row.name}
                              role={row.role}
                              status={row.status}
                              company={row.company}
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

        
        { showAddNewUser && <Dialog open={showAddNewUser} onClose={()=> setShowAddNewUser(false)}>
          <DialogTitle>Ajouter un nouveau utilisateur</DialogTitle>
          <DialogContent>
            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Nom"
                type="text"
                fullWidth
                value={newUserName}
                onChange={handleNewUserNameChange}
            />
            <TextField
                margin="dense"
                id="company"
                label="Site"
                type="text"
                fullWidth
                value={newUserCompany}
                onChange={handleNewUserCompanyChange}
            />
            <TextField
                margin="dense"
                id="role"
                label="Fonction"
                type="text"
                fullWidth
                value={newUserRole}
                onChange={handleNewUserRoleChange}
            />
           
            
            <FormControlLabel
                control={<Checkbox checked={newUserActive} onChange={handleNewUserActiveChange} />}
                label="Actif"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseAddUserForm}>Annuler</Button>
            <Button onClick={handleAddUser} color="primary">Ajouter</Button>
          </DialogActions>
        </Dialog> }
      </Container>
  );
}

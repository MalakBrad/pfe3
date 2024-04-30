import { useState } from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LoadingButton from '@mui/lab/LoadingButton';
import { alpha, useTheme } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';
import Iconify from 'src/components/iconify';
import { useNavigate } from 'react-router-dom';
import {users} from "src/utils/data";
import {toast} from "react-toastify";

// Import user data

export default function LoginView() {
    const theme = useTheme();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleClick = () => {
        const { email, password } = formData;

        // Check if the provided email and password match any user in the user array
        const foundUser = users.find((user) => user.email === email && user.password === password);
        if (foundUser) {
            // If user found, remove password field and store user in localStorage
            const { password, ...objUser } = foundUser;
            localStorage.setItem('user', JSON.stringify(objUser));

            // Navigate to the dashboard
            navigate('/dashboard');
            toast.success('Connexion réussie !');
        } else {
            // If user not found, display an error message
            setError('Adresse e-mail ou mot de passe invalide!');
            toast.error('Échec de la connexion !');
        }
    };


    const renderForm = (
        <>
            <Stack spacing={5}>
                <TextField name="email" label="Adresse e-mail" value={formData.email} onChange={handleChange} />

                <TextField
                    name="password"
                    label="Mot de Passe"
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={handleChange}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                                    <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
            </Stack>

            <Stack direction="row" alignItems="center" justifyContent="flex-end" sx={{ my: 3 }}>
                <Link variant="subtitle2" underline="hover">
                    Mot de passe oublié ?
                </Link>
            </Stack>

            {error && <Typography color="error">{error}</Typography>}

            <LoadingButton
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                color="inherit"
                onClick={handleClick}
            >
                Se Connecter
            </LoadingButton>
        </>
    );

    return (
        <Box
            sx={{
                height: 1,
            }}
        >
            <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
                <Card
                    sx={{
                        p: 5,
                        width: 1,
                        maxWidth: 420,
                    }}
                >
                    <Stack spacing={7}>
                        <Typography variant="h4"> Contribuons ensemble pour améliorer notre SMQ </Typography>

                        {renderForm}
                    </Stack>
                </Card>
            </Stack>
        </Box>
    );
}

import { Helmet } from 'react-helmet-async';

import { LoginView } from 'src/sections/login';

// ----------------------------------------------------------------------

export default function LoginPage() {
  return (
    <>
      <Helmet>
        <title> Se Connecter | Suivi SMQ </title>
      </Helmet>
      <LoginView />
    </>
  );
}

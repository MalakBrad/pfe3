import { Helmet } from 'react-helmet-async';

import { AppView } from 'src/sections/overview/view';

// ----------------------------------------------------------------------

export default function AppPage() {
  return (
    <>
      <Helmet>
        <title> Tableau De Bord | Suivi SMQ </title>
      </Helmet>
      
      <AppView />
    </>
  );
}

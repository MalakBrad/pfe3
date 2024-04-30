import { Helmet } from 'react-helmet-async';

import { PrestataireView } from 'src/sections/Prestataire/View';

// ----------------------------------------------------------------------

export default function PrestatairePage() {
  return (
    <>
      <Helmet>
        <title> Fournisseur | SMQ  </title>
      </Helmet>

      <PrestataireView/>
    </>
  );
}
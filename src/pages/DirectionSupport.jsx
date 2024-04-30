import { Helmet } from 'react-helmet-async';

import { SupportView } from 'src/sections/DirectionSupport/View';

// ----------------------------------------------------------------------

export default function DirectionSupportPage() {
  return (
    <>
      <Helmet>
        <title> Support | Suivi SMQ  </title>
      </Helmet>

      <SupportView/>
    </>
  );
}
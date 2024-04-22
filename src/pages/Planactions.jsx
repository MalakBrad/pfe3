import { Helmet } from 'react-helmet-async';

import { Planactionsview } from 'src/sections/Planactions/view';

// ----------------------------------------------------------------------

export default function Planactions() {
  return (
    <>
      <Helmet>
        <title> Plan des Actions | Minimal UI </title>
      </Helmet>

      <Planactionsview />
    </>
  );
}



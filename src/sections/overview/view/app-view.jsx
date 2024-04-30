import { faker } from '@faker-js/faker';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import Iconify from 'src/components/iconify';

import AppTasks from '../app-tasks';
import AppNewsUpdate from '../app-news-update';
import AppOrderTimeline from '../app-order-timeline';
import AppCurrentVisits from '../app-current-visits';
import AppWebsiteVisits from '../app-website-visits';
import AppWidgetSummary from '../app-widget-summary';
import AppTrafficBySite from '../app-traffic-by-site';
import AppCurrentSubject from '../app-current-subject';
import AppConversionRates from '../app-conversion-rates';

// ----------------------------------------------------------------------

export default function AppView() {
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
      Bienvenue 👋
      </Typography>

      <Grid container spacing={3}>
 


        <Grid xs={12} md={6} lg={8}>
          <AppWebsiteVisits
            title="Gestion des GABs"
            subheader=""
            chart={{
              labels: [
                '01/01/2023',
                '02/02/2023',
                '03/01/2023',
                '04/01/2023',
                '05/01/2023',
                '06/01/2023',
                '07/01/2023',
                '08/01/2023',
                '09/01/2023',
                '10/01/2023',
                '11/01/2023',
              ],
               
              series: [
                {
                  name: 'Objectif Qualité',
                  type: 'line', // Utiliser une courbe linéaire
                  data: Array(11).fill(70),
                },
                {
                  name: 'Délai de traitement des excédents GABs',
                  type: 'area',
                  fill: 'gradient',
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },
                {
                  name: 'Délai de traitement des carte capturées',
                  type: 'area',
                  fill: 'gradient',
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
                
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppCurrentVisits
            title="Codes Réponses de rejet/carte en local"
            chart={{
              series: [
                { label: 'CARD NOT ACTIF', value: 4344 },
                { label: 'PIN ERROR', value: 5435 },
                { label: 'Dépassement du plafond de la carte', value: 1443 },
                { label: 'Fond insuffisant', value: 4443 },
                { label: 'Autres', value: 4443 },
              ],
            }}
          />
        </Grid>

        
      </Grid>
    </Container>
  );
}

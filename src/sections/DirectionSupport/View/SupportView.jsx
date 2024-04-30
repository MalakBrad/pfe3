import {  Button, Container, Grid, Stack, Typography } from "@mui/material";
import AppWidgetSummary from "src/sections/overview/app-widget-summary";


export default function SupportView() { 
  return(
     <Container>
              <Typography variant="h4"> Direction Support </Typography>
              <Grid container justify="center" spacing={2}>
  <Grid item xs={12} sm={6} md={3}>
    <AppWidgetSummary
      title="Direction RH"
      total={0}
      color="error"
      icon={<img alt="icon" src="/assets/icons/glass/ic_glass_users.png" />}
    />
  </Grid>
  <Grid item xs={12} sm={6} md={3}>
    <AppWidgetSummary
      title="DIL"
      total={0}
      color="error"
    />
  </Grid>
  <Grid item xs={12} sm={6} md={3}>
    <AppWidgetSummary
      title="Direction Achat"
      total={0}
      color="error"
      icon={<img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />}
    />
  </Grid>
  <Grid item xs={12} sm={6} md={3}>
    <AppWidgetSummary
      title="DSI"
      total={0}
      color="error"
    />
  </Grid>
</Grid>

    
    </Container>         
  );
}
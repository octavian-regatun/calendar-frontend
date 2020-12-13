import { Container, Grid } from '@material-ui/core';
import React from 'react';
import Calendar from '../components/Calendar/Calendar';
import EventList from '../components/EventList/EventList';
import Sidebar from '../components/Sidebar/Sidebar';

function Home() {
  return (
    <div style={{ display: 'inline-flex', height: '100vh', width: '100vw' }}>
      <Sidebar color='#171D25' height='100%' width='5rem' />
      <Container
        maxWidth={false}
        style={{
          height: '100vh',
          padding: 0,
          background: '#1E242D'
        }}
      >
        <Grid container>
          <Grid item xs={3}>
            <Calendar />
          </Grid>
          <Grid item xs={4} style={{ height: '100vh' }}>
            <EventList />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Home;

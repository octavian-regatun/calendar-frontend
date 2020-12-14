import { Container, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import Calendar from '../components/Calendar/Calendar';
import EventList from '../components/EventList/EventList';
import Sidebar from '../components/Sidebar/Sidebar';

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  }
}));

function Home() {
  const classes = useStyles();

  return (
    <div style={{ display: 'inline-flex', height: '100vh', width: '100vw' }}>
      <Sidebar
        className={classes.root}
        color='#171D25'
        height='100%'
        width='5rem'
      />
      <Container
        maxWidth={false}
        style={{
          height: '100vh',
          padding: 0,
          background: '#1E242D'
        }}
      >
        <Grid container>
          <Grid item lg={3} xs={12}>
            <Calendar />
          </Grid>
          <Grid item lg={5} xs={12} style={{ height: '100vh' }}>
            <EventList />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Home;

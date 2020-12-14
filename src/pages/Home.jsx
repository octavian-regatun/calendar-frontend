import { Container, Grid, makeStyles } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Calendar from '../components/Calendar/Calendar';
import EventList from '../components/EventList/EventList';
import PublicEvents from '../components/PublicEvents/PublicEvents';
import Sidebar from '../components/Sidebar/Sidebar';
import backendURL from '../utils/config';

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  }
}));

function Home() {
  const classes = useStyles();

  const [events, setEvents] = useState([]);
  useEffect(() => {
    axios
      .get(`${backendURL}/api/events`, { withCredentials: true })
      .then((res) => {
        setEvents(res.data);
      });
  }, []);

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
          <Grid item lg={3} xs={12} style={{ height: '100vh' }}>
            <Grid
              item
              xs={12}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Calendar />
            </Grid>
            <Grid
              item
              xs={12}
              style={{
                height: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <PublicEvents />
            </Grid>
          </Grid>
          <Grid item lg={4} xs={12} style={{ height: '100vh' }}>
            <EventList
              cardColor='#1E242D'
              backgroundColor='#171D25'
              events={events}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Home;

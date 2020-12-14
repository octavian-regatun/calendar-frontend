import { makeStyles } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import backendURL from '../../utils/config';
import EventList from '../EventList/EventList';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: 'white',
    margin: '8px 0 16px 0',
    padding: '0'
  }
});

function PublicEvents() {
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
    <div style={{ height: '75%', width: '100%' }}>
      <h1 align='center' className={classes.title}>
        Public Events
      </h1>
      <EventList
        style={{ backgroundColor: 'red' }}
        events={events}
        cardColor='#171D25'
        backgroundColor='#1E242D'
      />
    </div>
  );
}

export default PublicEvents;

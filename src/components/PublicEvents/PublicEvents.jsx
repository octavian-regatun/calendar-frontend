import { makeStyles } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import backendURL from '../../utils/config';
import EventList from '../EventList/EventList';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  title: {
    color: 'white',
    margin: '8px 16px 16px 16px',
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

  function arePublicEvents(events) {
    if (events.length === 0) {
      return false;
    }
    return true;
  }

  return (
    <div className={classes.root} style={{ height: '75%', width: '100%' }}>
      <h1 align='center' className={classes.title}>
        Public Events
      </h1>
      {arePublicEvents([]) ? (
        <EventList
          style={{ backgroundColor: 'red' }}
          events={events}
          cardColor='#171D25'
          backgroundColor='#1E242D'
        />
      ) : (
        <div>
          <h2 className={classes.title} style={{ marginTop: '64px' }}>
            There are no public events yet
          </h2>
        </div>
      )}
    </div>
  );
}

export default PublicEvents;

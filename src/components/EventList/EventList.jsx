import { makeStyles } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Scrollbars from 'react-custom-scrollbars';
import EventCard from '../EventCard';
import backendURL from '../../utils/config';

const useStyles = makeStyles({
  container: {
    width: '100%',
    height: '100vh',
    backgroundColor: '#171D25',
    borderRadius: '10px',
    display: 'flex !important',
    flexDirection: 'column',
    alignItems: 'center'
  },
  card: {
    margin: '16px auto'
  }
});

function EventList() {
  const classes = useStyles();

  const [events, setEvents] = useState([]);
  useEffect(() => {
    axios
      .get(`${backendURL}/api/events`, { withCredentials: true })
      .then((res) => {
        setEvents(res.data);
        console.log(res);
      });
  }, []);

  return (
    <Scrollbars className={classes.container}>
      {events.map((event) => (
        <EventCard
          key={`event-card-${event._id}`}
          className={classes.card}
          title={event.title}
          description={event.description}
          startAt={`${new Date(event.startAt).getDate()}.${
            new Date(event.startAt).getMonth() < 9
              ? `0${new Date(event.startAt).getMonth() + 1}`
              : new Date(event.startAt).getMonth() + 1
          }`}
          endAt={`${new Date(event.endAt).getDate()}.${
            new Date(event.endAt).getMonth() < 9
              ? `0${new Date(event.endAt).getMonth() + 1}`
              : new Date(event.endAt).getMonth() + 1
          }`}
        />
      ))}
    </Scrollbars>
  );
}

export default EventList;

import { makeStyles } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Scrollbars from 'react-custom-scrollbars';
import EventCard from '../EventCard/EventCard';
import backendURL from '../../utils/config';

const useStyles = makeStyles({
  container: {
    width: '100%',
    height: '100%',
    borderRadius: '10px',
    display: 'flex !important',
    flexDirection: 'column',
    alignItems: 'center'
  },
  card: {
    margin: '16px auto'
  }
});

function EventList(props) {
  const classes = useStyles();

  const colors = ['red', 'green', 'yellow', 'blue', 'cyan', 'purple', 'pink'];

  function returnRandomColor(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  return (
    <Scrollbars
      className={classes.container}
      style={{ backgroundColor: props.backgroundColor }}
    >
      {props.events.map((event) => (
        <EventCard
          key={`event-card-${event._id}`}
          className={classes.card}
          title={event.title}
          description={event.description}
          startAt={event.startAt}
          endAt={event.endAt}
          colorTag={returnRandomColor(colors)}
          backgroundColor={props.cardColor}
        />
      ))}
    </Scrollbars>
  );
}

export default EventList;

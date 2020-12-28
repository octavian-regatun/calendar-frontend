import { makeStyles } from '@material-ui/core';
import React from 'react';
import Scrollbars from 'react-custom-scrollbars';
import EventCard from './EventCard';

const useStyles = makeStyles({
  container: {
    width: '100%',
    height: '100%',
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

  return (
    <Scrollbars
      className={classes.container}
      style={{ backgroundColor: props.backgroundColor }}
    >
      {props.events.map(event => (
        <EventCard
          key={`event-card-${event._id}`}
          className={classes.card}
          title={event.title}
          description={event.description}
          startAt={event.startAt}
          endAt={event.endAt}
          colorTag={event.color}
          backgroundColor={props.cardColor}
        />
      ))}
    </Scrollbars>
  );
}

export default EventList;

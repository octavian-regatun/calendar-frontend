import { Grid, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import AddEvent from './AddEventButton';
import AddImageButton from './AddImageButton';
import ColorPicker from './ColorPicker';
import DescriptionTextField from './DescriptionTextField';
import EndAtDateTimePicker from './EndAtDateTimePicker';
import ImagePreview from './ImagePreview';
import Map from './Map/Map';
import StartAtDateTimePicker from './StartAtDateTimePicker';
import TitleTextField from './TitleTextField';

const useStyles = makeStyles({
  center: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleField: { marginBottom: '16px' },
  descriptionField: { margin: '0 32px' },
  toFromContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '16px 32px'
  },
  startAtField: { paddingRight: '32px' },
  endAtField: { padding: '0 16px' },
  imageContainer: { marginBottom: '16px' },
  colorField: { paddingLeft: '32px' }
});

function Form() {
  const classes = useStyles();

  const [event, setEvent] = useState({
    title: undefined,
    description: undefined,
    startAt: undefined,
    endAt: undefined,
    color: undefined,
    image: undefined
  });

  return (
    <Grid container>
      <Grid item xs={12} className={classes.center}>
        <TitleTextField event={event} setEvent={setEvent} />
      </Grid>
      <Grid item xs={12} className={classes.center}>
        <DescriptionTextField event={event} setEvent={setEvent} />
      </Grid>
      <Grid container className={classes.toFromContainer}>
        <Grid item xs={12} lg={4} className={classes.startAtField}>
          <StartAtDateTimePicker event={event} setEvent={setEvent} />
        </Grid>
        <Grid item xs={12} lg={4} className={classes.endAtField}>
          <EndAtDateTimePicker event={event} setEvent={setEvent} />
        </Grid>
        <Grid item xs={12} lg={4} className={`${classes.colorField}`}>
          <ColorPicker event={event} setEvent={setEvent} />
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        className={`${classes.center} ${classes.imageContainer}`}
      >
        <AddImageButton event={event} setEvent={setEvent} />
      </Grid>
      <Grid item xs={12} className={classes.center}>
        <ImagePreview event={event} />
      </Grid>
      <Grid item xs={12} className={classes.center}>
        <Map />
      </Grid>
      <Grid item xs={12} className={classes.center}>
        <AddEvent event={event} />
      </Grid>
    </Grid>
  );
}

export default Form;

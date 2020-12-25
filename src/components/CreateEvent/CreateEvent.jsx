import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import Scrollbars from 'react-custom-scrollbars';
import Form from './Form/Form';
import Title from './Title';

const useStyles = makeStyles({
  center: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

function CreateEvent() {
  const classes = useStyles();
  return (
    <Scrollbars>
      <Grid
        className={classes.center}
        container
        style={{ backgroundColor: '#1E242D' }}
      >
        <Grid item xs={12}>
          <Title />
        </Grid>
        <Form />
      </Grid>
    </Scrollbars>
  );
}

export default CreateEvent;

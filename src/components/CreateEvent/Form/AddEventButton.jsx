import { Button } from '@material-ui/core';
import React from 'react';

const AddEvent = ({ event }) => (
  <Button
    type='submit'
    variant='outlined'
    color='primary'
    style={{ marginTop: '16px' }}
    onClick={() => {
      console.log(event);
    }}
  >
    Add Event
  </Button>
);

export default AddEvent;

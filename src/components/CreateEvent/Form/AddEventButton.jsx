import { Button } from '@material-ui/core';
import Axios from 'axios';
import React from 'react';
import backendURL from '../../../utils/config';

const AddEvent = ({ event }) => (
  <Button
    type='submit'
    variant='outlined'
    color='primary'
    style={{ marginTop: '16px' }}
    onClick={() => {
      Axios.post(`${backendURL}/api/events/`, event, {
        withCredentials: true
      }).catch(() => console.log('an error has occurred'));
    }}
  >
    Add Event
  </Button>
);

export default AddEvent;

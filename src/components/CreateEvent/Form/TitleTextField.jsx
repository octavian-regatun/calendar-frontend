import { makeStyles } from '@material-ui/core';
import React from 'react';
import CustomTextField from '../../CustomTextField';

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
  endAtField: { padding: '0 16px 0 16px' },
  colorField: { paddingLeft: '32px' },
  imageContainer: { marginBottom: '16px' }
});

function TitleTextField({ event, setEvent }) {
  const TITLE_MAX_LENGTH = 50;

  const classes = useStyles();

  return (
    <CustomTextField
      onChange={e => {
        setEvent({ ...event, title: e.target.value });
      }}
      name='title'
      label='Title'
      variant='outlined'
      className={classes.titleField}
      inputProps={{ maxLength: TITLE_MAX_LENGTH }}
    />
  );
}

export default TitleTextField;

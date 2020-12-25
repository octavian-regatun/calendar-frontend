import { makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
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

function DescriptionTextField({ event, setEvent }) {
  const classes = useStyles();

  const DESCRIPTION_MAX_LENGTH = 400;

  const [descriptionLength, setDescriptionLength] = useState(0);

  return (
    <CustomTextField
      label='Description'
      variant='outlined'
      className={classes.descriptionField}
      inputProps={{ maxLength: DESCRIPTION_MAX_LENGTH }}
      multiline
      onChange={e => {
        setEvent({ ...event, description: e.target.value });
        setDescriptionLength(e.target.value.length);
      }}
      helperText={`${descriptionLength}/${DESCRIPTION_MAX_LENGTH}`}
      fullWidth
    />
  );
}

export default DescriptionTextField;

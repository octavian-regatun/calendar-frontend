import { Button } from '@material-ui/core';
import React from 'react';
import { fileToBase64 } from '../../../utils/utils';

function AddImageButton({ event, setEvent }) {
  return (
    <>
      <input
        onChange={async e => {
          setEvent({
            ...event,
            image: await fileToBase64(e.target.files[0])
          });
        }}
        accept='image/*'
        style={{ display: 'none' }}
        id='raised-button-file'
        type='file'
      />
      <label htmlFor='raised-button-file'>
        <Button variant='outlined' color='primary' component='span'>
          Add Image
        </Button>
      </label>
    </>
  );
}

export default AddImageButton;

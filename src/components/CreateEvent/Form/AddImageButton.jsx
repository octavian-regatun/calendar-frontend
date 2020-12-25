import { Button } from '@material-ui/core';
import React from 'react';

function AddImageButton({ event, setEvent }) {
  return (
    <>
      <input
        onChange={e => {
          setEvent({
            ...event,
            image: e.target.files[0]
          });
          console.log(e.target.files[0]);
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

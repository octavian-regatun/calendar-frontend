import { Button, Popover } from '@material-ui/core';
import React, { useState } from 'react';
import { ChromePicker } from 'react-color';

function ColorPicker({ event, setEvent }) {
  const [color, setColor] = useState('#ffffff');

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  return (
    <>
      <Button
        variant='outlined'
        color='primary'
        onClick={event => {
          setAnchorEl(event.currentTarget);
        }}
        style={{ height: '100%', width: '100%' }}
      >
        Pick a color
      </Button>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={() => {
          setAnchorEl(null);
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
      >
        <ChromePicker
          color={color}
          onChange={color => {
            setColor(color);
          }}
          onChangeComplete={color => {
            setColor(color);
            setEvent({ ...event, color: color.hex });
          }}
          disableAlpha
        />
      </Popover>
    </>
  );
}

export default ColorPicker;

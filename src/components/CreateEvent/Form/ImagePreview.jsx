import React from 'react';

function ImagePreview({ event }) {
  return event.image ? (
    <img
      src={event.image}
      width='300'
      alt='cover'
      style={{ marginBottom: '16px' }}
    />
  ) : null;
}

export default ImagePreview;

import { makeStyles } from '@material-ui/core';
import React, { useEffect } from 'react';
import ReactMapboxGl from 'react-mapbox-gl';
import SearchTextField from './SearchTextField/SearchTextField';

const MapMapbox = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoiYmVuZ285MjMiLCJhIjoiY2ppa2J4dWIwMHcxNjN2b3dydGlkdzhzMiJ9.xkkhK_smxCjTZSOJSebQEQ'
});

const useStyles = makeStyles({
  root: {
    height: '300px',
    width: '300px',
    display: 'relative'
  },
  map: {
    height: '100%',
    width: '100%'
  }
});

function Map() {
  const classes = useStyles();

  useEffect(async () => {}, []);

  return (
    <div className={classes.root}>
      <MapMapbox
        center={[27.585247, 47.159957]}
        style='mapbox://styles/mapbox/streets-v8'
        className={classes.map}
      >
        <SearchTextField />
      </MapMapbox>
    </div>
  );
}

export default Map;

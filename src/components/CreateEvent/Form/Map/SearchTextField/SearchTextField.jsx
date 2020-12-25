import {
  CircularProgress,
  Grid,
  makeStyles,
  TextField,
  Typography
} from '@material-ui/core';
import { LocationOn } from '@material-ui/icons';
import { Autocomplete } from '@material-ui/lab';
import Axios from 'axios';
import publicIp from 'public-ip';
import React, { useEffect, useState } from 'react';
import backendURL from '../../../../../utils/config';
import './SearchTextField.css';

const useStyles = makeStyles(theme => ({
  search: {
    position: 'absolute',
    zIndex: '10',
    backgroundColor: 'white !important',
    '& input': {
      color: 'black'
    },
    '& label': {
      color: 'gray'
    },
    '& .Mui-focused': {
      color: 'gray'
    },
    '& .MuiInputBase-root': {
      backgroundColor: 'white'
    },
    '& .MuiFilledInput-root': {
      '&::before': {
        borderColor: 'gray'
      },
      '&::after': {
        borderColor: 'black'
      }
    }
  },
  icon: {
    color: theme.palette.text.primary,
    marginRight: theme.spacing(2)
  }
}));

function SearchTextField() {
  const classes = useStyles();

  const [q, setQ] = useState('');
  const [ip, setIp] = useState(undefined);
  const [suggestions, setSuggestions] = useState([]);

  async function getIp() {
    if (!ip) setIp(await publicIp.v4());
  }

  useEffect(async () => {
    const options = {
      params: {
        q,
        ip
      }
    };

    if (ip && q) {
      await Axios.get(`${backendURL}/api/location/autosuggest`, options).then(
        res => {
          setSuggestions(res.data.items);
          console.log(res.data);
        }
      );
    } else if (!q) {
      setSuggestions([]);
    }
  }, [ip, q]);

  function getAddress(address) {
    address = address.slice(address.indexOf(',') + 2, address.length);
    return address;
  }

  return (
    <Autocomplete
      loading
      className={classes.autocomplete}
      options={suggestions}
      getOptionLabel={option => option.title}
      onInputChange={async e => {
        setQ(e.target.value);
        await getIp();
      }}
      renderInput={params => (
        <TextField
          {...params}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {suggestions.length > 0 ? null : (
                  <CircularProgress style={{ color: 'gray' }} size='20px' />
                )}
                {params.InputProps.endAdornment}
              </>
            )
          }}
          variant='filled'
          label='Search location'
          className={classes.search}
          fullWidth
          debug='true'
        />
      )}
      renderOption={option => (
        <Grid container alignItems='center'>
          <Grid item>
            <LocationOn className={classes.icon} />
          </Grid>
          <Grid item xs>
            <span>{option.title}</span>
            <Typography variant='body2' style={{ color: 'gray' }}>
              {getAddress(option.address.label)}
            </Typography>
          </Grid>
        </Grid>
      )}
    />
  );
}

export default SearchTextField;

import { TextField, withStyles } from '@material-ui/core';

const CustomTextField = withStyles({
  root: {
    '& input': {
      color: 'white'
    },
    '& textarea': {
      color: 'white'
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'gray'
      },
      '&:hover fieldset': {
        borderColor: 'white'
      }
    }
  }
})(TextField);

export default CustomTextField;

import { withStyles } from '@material-ui/core';
import { DateTimePicker } from '@material-ui/pickers';

const CustomDateTimePicker = withStyles({
  root: {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'gray'
      },
      '&:hover fieldset': {
        borderColor: 'white'
      },
      '& input': {
        color: 'white'
      }
    }
  }
})(DateTimePicker);

export default CustomDateTimePicker;

import {
  createTheme, responsiveFontSizes, makeStyles, createStyles,
} from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

/**
 * Light Theme
 */
export const lightTheme = responsiveFontSizes(createTheme({
  palette: {
    type: 'light',
    primary: {
      main: grey[500],
    },
    background: {
      paper: 'rgba(255,255,255,0.5)',
    },
  },
}));

/**
 * Dark Theme
 */
export const darkTheme = responsiveFontSizes(createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: grey[900],
    },
    background: {
      paper: 'rgba(66, 66, 66, 0.4)',
    },
  },
}));

export const useStyles = makeStyles(() => createStyles({
  title: {
    flexGrow: 1,
  },
}));

import { createMuiTheme, responsiveFontSizes, makeStyles, createStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

/**
 * Light Theme
 */
export const lightTheme = responsiveFontSizes(createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: grey[500],
    },
  },
}));

/**
 * Dark Theme
 */
export const darkTheme = responsiveFontSizes(createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: grey[900],
    },
  },
}));

export const useStyles = makeStyles(() =>
  createStyles({
    title: {
      flexGrow: 1,
    }
  }),
);

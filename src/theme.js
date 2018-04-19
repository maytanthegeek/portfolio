import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { grey500 } from 'material-ui/styles/colors';
import { grey700 } from 'material-ui/styles/colors';
import { redA700 } from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: grey500,
    primary2Color: grey700,
    accent1Color: redA700,
    pickerHeaderColor: grey500
  },
  appBar: {
    height: 55
  }
});

export default muiTheme;
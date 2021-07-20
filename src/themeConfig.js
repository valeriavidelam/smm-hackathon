import { createTheme } from '@material-ui/core/styles'
import lightGreen from '@material-ui/core/colors/lightGreen'
import { grey } from '@material-ui/core/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: lightGreen[600]
    },
    secondary: {
      main: grey[500]
    }
  },

});

export default theme;
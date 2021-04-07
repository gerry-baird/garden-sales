import {
  makeStyles,
  CssBaseline,
  Paper,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core";

import Header from "./components/Header";
import InvForm from "./components/InvForm";

const theme = createMuiTheme({});

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div>
      <Header />
      <Paper className={classes.pageContent}>
        <InvForm />
      </Paper>
      <CssBaseline />
    </div>
  );
}

export default App;

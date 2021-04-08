import { makeStyles, CssBaseline, Paper, Container } from "@material-ui/core";

import Header from "./components/Header";
import WarrantyForm from "./components/WarrantyForm";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
    paddingTop: "1px",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div>
      <Header />
      <Container maxWidth="md">
        <Paper className={classes.pageContent} maxWidth="md">
          <WarrantyForm />
        </Paper>
      </Container>
      <CssBaseline />
    </div>
  );
}

export default App;

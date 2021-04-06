import {
  makeStyles,
  CssBaseline,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core";

import Header from "./components/Header";

const theme = createMuiTheme({});

function App() {
  return (
    <div>
      <Header />
      <CssBaseline />
    </div>
  );
}

export default App;

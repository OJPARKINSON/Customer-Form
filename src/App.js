import React from "react";
import "./App.css";
import {
  TextField,
  Grid,
  Typography,
  CssBaseline,
  Card,
  CardContent,
  Button
} from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    padding: 10,
  },
  item: {
    marginBottom: 15,
  },
});

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <CssBaseline />
      <Grid container direction="column" justify="center" alignItems="center">
        <Card className={classes.root}>
          <CardContent>
            <form>
              <div className={classes.item}>
                <Typography component="legend">
                  What would you rate our service:
                </Typography>
                <Rating />
              </div>

              <div className={classes.item}>
                <Typography component="legend">
                  Type your thoughts here:
                </Typography>
                <TextField></TextField>
              </div>
              <Button variant="contained" color="primary">
                Submit
              </Button>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}

export default App;

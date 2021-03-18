import { Button, Grid, TextField } from "@material-ui/core";
import React from "react";

const AddTredForm = () => {
  return (
    <div>
      <form>
        <Grid container direction="column" spacing={2}>
          <Grid item xs>
            <TextField fullWidth variant="outlined" label="Author" />
          </Grid>
          <Grid item xs>
            <TextField fullWidth variant="outlined" label="Description" />
          </Grid>
          <Grid item xs>
            <Button type="submit" color="primary" variant="contained">
              Create
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default AddTredForm;

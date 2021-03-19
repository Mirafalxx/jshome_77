import { Button, Grid, TextField } from "@material-ui/core";
import { useDispatch } from "react-redux";
import React, { useState } from "react";
import { createTred, fetchTreds } from "../../store/action";

const AddTredForm = () => {
  const dispatch = useDispatch()
  const [state, setState] = useState({
    author: '',
    description: ''
  });


  const changeHandler = (e) => {
    const { name, value } = e.target;
    setState(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const addTred = (e) => {
    e.preventDefault();
    dispatch(createTred(state.author, state.description));
    dispatch(fetchTreds());
    setState({ author: '', description: '' })
  }

  return (
    <div>
      <form onSubmit={addTred}>
        <Grid container direction="column" spacing={2}>
          <Grid item xs>
            <TextField fullWidth variant="outlined" label="Author" name='author' value={state.author} onChange={changeHandler} />
          </Grid>
          <Grid item xs>
            <TextField fullWidth variant="outlined" label="Description" name='description' value={state.description} onChange={changeHandler} />
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

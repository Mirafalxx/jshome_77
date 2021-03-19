import { Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTreds } from "../../store/action";
import TredsItems from "./TredsItems";

const Treds = () => {


  const dispatch = useDispatch();
  const treds = useSelector(state => state.treds.treds)

  useEffect(() => {
    dispatch(fetchTreds())
  }, [dispatch])
  return (
    <Grid container direction="column" spacing={2}>
      <Grid item container spacing={1}>
        {treds.map((tred) => (
          <TredsItems
            key={tred.id}
            description={tred.description}
            author={tred.author === "" ? "Anonymous" : tred.author}
          />
        ))}
      </Grid>


    </Grid>
  );
};

export default Treds;

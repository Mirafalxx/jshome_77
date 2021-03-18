import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import TredsItems from "./TredsItems";

const Treds = () => {
  const [state, setState] = useState([
    {
      description: "TESTING 1",
      author: "Maxim 1 ",
      image: "IMG",
    },
    {
      description: "TESTING 2",
      author: "Maxim 2",
      image: "IMG",
    },
    {
      description: "TESTING 3",
      author: "",
      image: "IMG",
    },
  ]);
  const a = "Hello";
  return (
    <Grid container direction="column" spacing={2}>
      <Grid item container spacing={1}>
        {state.map((tred) => (
          <TredsItems
            description={tred.description}
            author={tred.author === "" ? "Anonymous" : tred.author}
          />
        ))}
      </Grid>
    </Grid>
  );
};

export default Treds;

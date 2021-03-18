import React from "react";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import { CardContent, CardHeader } from "@material-ui/core";

const TredsItems = ({ description, author, image }) => {
  return (
    <Grid item xs={12} sm={12} md={6} lg={4}>
      <Card>
        <CardHeader title={author} />
        <CardContent>{description}</CardContent>
      </Card>
    </Grid>
  );
};

export default TredsItems;

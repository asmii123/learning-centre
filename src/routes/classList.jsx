import React from "react";
import { Box, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import CardWithoutImage from "../components/cards/cardWithoutImage";

function ClassList(props) {
  return (
    <Box component={"div"} display={"grid"} gap={2}>
      <Box textAlign={"center"}>
        <Typography fontSize={30} textTransform={"uppercase"}>
          Choose your class
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
          <Grid item xs={4} key={item}>
            <CardWithoutImage class={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ClassList;

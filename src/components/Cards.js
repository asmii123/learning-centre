import * as React from "react";
import { Card, Container } from "@mui/material";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import axios from 'axios';
import { click } from "@testing-library/user-event/dist/click";

export default function Cards() {

    // function classHandler(){
    //     console.log('clicked');
    //     axios.get('https://restcountries.com/v3.1/all')
    //     .then(function (response) {
    //         console.log(response);
    //       })
    //       .catch(function (error) {
    //         console.log(error);
    //       })
    // }

  return (
      <Container maxWidth="lg" >
    <div className="cards">
      <Grid container spacing={2}  
  >
        {[3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
          <Grid item xs={4}>
            <Box className={`box--color-${index+4}`}
              sx={{
                width: 300,
                height: 150,
                backgroundColor: "pink",
                "&:hover": {
                  backgroundColor: "darkolivegreen",
                },
              }}
            //   onClick={classHandler}
            >
              <div className="card--name">
                CLASS <h1>{item + 1} </h1>
              </div>
            </Box>
          </Grid>
        ))}
      </Grid>
    </div>
    </Container>
  );
}

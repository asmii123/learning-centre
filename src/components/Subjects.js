import * as React from "react";
import { Card, Container } from "@mui/material";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Divider from '@mui/material/Divider';


export default function Subjects(){

    return(
        <div>
            <h1> CLASS 5</h1> 
            <h1 className="subject--header">CHOOSE SUBJECT </h1>

            <Container maxWidth="lg" >
    <div className="cards">
      <Grid container spacing={3}  
  >
        {['MATHS', 'SCIENCE', 'SOCIAL STUDIES', 'NEPALI', 'ENGLISH'].map((item, index) => (
          <Grid item xs={4} >
            <Box  
              sx={{
                // width: 300,
                height: 200,
                borderRadius: 2,
                backgroundColor: "lavender",
                "&:hover": {
                  backgroundColor: "blueviolet",
                },
              }}
            //   onClick={classHandler}
            >
              <div  className="subject--name">
               <h2 style={{ textAlign:'center'}} > {item} </h2>
               <Divider variant="middle" />
               <h4>Sub-Topics</h4>
              </div>
              

            </Box>
          </Grid>
        ))}
      </Grid>
    </div>
    </Container>

        </div>
    )
}
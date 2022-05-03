import * as React from "react";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

export default function Card(props) {

  return (
              <Link style={{textDecoration:'none', color:'black'}} to='/subjects'>
            <Box
              sx={{
                  width: 300,
                  height: 150,
                  backgroundColor: props.color,
                  "&:hover": {
                      backgroundColor: "darkolivegreen",
                    },
                }}
                >
              <div className="card--name">
                CLASS <h1>{props.class + 1} </h1>
                
              </div>
            </Box>
                </Link>
  );
}


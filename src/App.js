import React from "react"
import './App.css';
import Routing from "./routing";
import Navigation from "./components/header/navigation";
import {Box} from "@mui/material";
export default function App(){
  return(
    <Box  >
        <Navigation/>
        <Box p={2} maxWidth={"lg"} margin={"auto"}>
            <Routing/>
        </Box>
    </Box>
  )
}

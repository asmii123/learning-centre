import React from "react"
import './App.css';
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import Body from './components/Body';
import Subjects from './components/Subjects'
import Container from '@mui/material/Container';



export default function App(){
  return(
    <div >
    <Navbar />
    <Body />
    <Cards />
    {/* <Subjects /> */}


    </div>
  )
}

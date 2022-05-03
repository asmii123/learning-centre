import React from "react";
import { Container, Link } from "@mui/material";
import { Grid } from "@mui/material";
import Body from "../components/Body";
import Card from "../components/Card";

export default function HomeScreen() {
  const cardData = [
    { class: 3, color: "palevioletred" },
    { class: 4, color: "pink" },
    { class: 5, color: "lavender" },
    { class: 6, color: "powderblue" },
    { class: 7, color: "steelblue" },
    { class: 8, color: "teal" },
    { class: 9, color: "khaki" },
    { class: 10, color: "peru" },

  ];
  return (
    <>
      <Body />
      <Container maxWidth="lg">
        <div className="cards" >
          <Grid container spacing={8}>
            {cardData.map((item, index) => (
              <Grid item spacing={2}>
                  <Card key={index} class={item.class} color={item.color} />
              </Grid>
            ))}
          </Grid>
        </div>
      </Container>
    </>
  );
}

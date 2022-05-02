import React from "react";
import { Card } from "@mui/material";
import Typography from "@mui/material/Typography";
import "./style.css";

function CardWithoutImage(props) {
  return (
    <Card
      sx={{
        px: 2,
        display: "grid",
        gap: 2,
        py: 5,
        textAlign: "center",
        background: "#" + ((Math.random() * 0xffffff) << 0).toString(16),
      }}
      className={"card-one-wrapper"}
    >
      <Typography textTransform={"uppercase"} fontSize={24}>
        Class
      </Typography>
      <Typography className={"card-one-title"} fontSize={24}>
        {props?.class + 1}
      </Typography>
    </Card>
  );
}

export default CardWithoutImage;

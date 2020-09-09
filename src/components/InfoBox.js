import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./css/InfoBox.css";
function InfoBox({ active, title, cases, total, ...props }) {
  console.log(title, active);
  return (
    <Card
      onClick={props.onClick}
      className={`infoBox ${active && "infoBox--selected"}`}
    >
      <CardContent>
        <Typography
          className="infoBox__title"
          color="textSecondary"
          gutterBottom
        >
          {title}
        </Typography>
        <h2 className="infoBox__cases">{cases} today</h2>
        <Typography className="infoBox__title" color="textSecondary">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;

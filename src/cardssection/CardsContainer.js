import { Box, Grid } from "@mui/material";
import React, { useState } from "react";
import SingleCard from "../singlecard/SingleCard";

function CardsContainer() {
  const [cardProperties, setcardProperties] = useState([
    {
      iconColor: "success",
      iconBackgroundColor: "#c8e6c9",
      heading: "total amount to be paid",
      cardText: "10,00,000",
      marginTopForText: "1.3rem",
      isMoney: true,
    },
    {
      iconColor: "warning",
      iconBackgroundColor: "#ffccbc",
      heading: "total amount to be paid this month",
      cardText: "1,00,000",
      marginTopForText: "0.3rem",
      isMoney: true,
    },
    {
      iconColor: "info",
      iconBackgroundColor: "#bbdefb",
      heading: "total invoice generated",
      cardText: "250",
      marginTopForText: "1.3rem",
      isMoney: false,
    },
    {
      iconColor: "secondary",
      iconBackgroundColor: "#e1bee7",
      heading: "number of mandate created",
      cardText: "250",
      marginTopForText: "0.3rem",
      isMoney: false,
    },
  ]);
  return (
    <Box mr={2} ml={2}>
      <Grid container spacing={2} mt={2}>
        {cardProperties.map((val, index) => {
          return (
            <Grid
              key={index}
              item
              xs={12}
              md={6}
              lg={3}
              sx={{
                textAlign: "center",
                justifyContent: "center",
                margin: "auto",
                dispaly: "flex",
              }}
            >
              <SingleCard
                iconColor={val.iconColor}
                iconBackgroundColor={val.iconBackgroundColor}
                heading={val.heading}
                cardText={val.cardText}
                marginTopForText={val.marginTopForText}
                isMoney={val.isMoney}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export default CardsContainer;

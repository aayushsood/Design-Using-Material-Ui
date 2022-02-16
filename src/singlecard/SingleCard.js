import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";

export default function SingleCard({
  iconColor,
  iconBackgroundColor,
  heading,
  cardText,
  marginTopForText,
  isMoney,
}) {
  return (
    <Card sx={{ maxWidth: 400, position: "relative", margin: "auto" }}>
      <Grid container>
        <Grid item xs={4}>
          <DescriptionOutlinedIcon
            sx={{
              fontSize: "65px",
              margin: "1rem",
              padding: "0.5rem",
              background: iconBackgroundColor,
              borderRadius: "0.2rem",
            }}
            color={iconColor}
          />
        </Grid>
        <Grid item xs={8}>
          <CardContent
            sx={{ textAlign: "left", position: "absolute", left: "6rem" }}
          >
            <Typography
              sx={{
                textAlign: "left",
                textTransform: "capitalize",
                marginBottom: "0",
              }}
              variant="p"
              color="text.secondary"
            >
              {heading}
            </Typography>
            <Typography
              variant="h4"
              sx={{
                color: "#000000",
                fontSize: "2.2rem",
                fontWeight: "600",
                marginTop: marginTopForText,
                verticalAlign: "bottom",
              }}
            >
              {isMoney ? (
                <span> &#8377;{cardText}</span>
              ) : (
                <span> {cardText}</span>
              )}
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
}

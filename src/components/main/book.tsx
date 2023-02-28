import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
interface props {
  data: any;
}
export default function Book({ data }: props) {
  return (
    <Card
      sx={{ minWidth: "340px", maxWidth: "340px", margin: "0px 20px 20px 0px" }}
    >
      <CardActionArea>
        <CardMedia
          sx={{ paddingTop: "15px" }}
          component="img"
          height="355"
          image="https://www.steimatzky.co.il/pub/media/catalog/product/cache/054fd023ed4beb824f3143faa6fcc008/0/2/026640415-1635799743535883.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespre ad group of squamate reptiles, with over
            6,000 species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

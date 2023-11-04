import React, { useEffect } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import { PropTypes } from "prop-types";
import NavBar from "./NavBar";

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        m: 2,
        fontSize: "0.875rem",
        fontWeight: "700",
        ...sx,
      }}
      {...other}
    />
  );
}

Item.propTypes = {
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};

export default function Business(props) {
  useEffect(() => {
    (function () {
      props.getCategory("business");
    })();
  });

  return (
    <>
      <NavBar />
      <Box sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
        {props.data?.map((elements, index) => {
          return (
            <Item key={index}>
              <Card sx={{ height: "100%" }}>
                <CardMedia
                  component="img"
                  height="300"
                  image={
                    elements.urlToImage
                      ? elements.urlToImage
                      : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbRaxlxQVfs3QBxs7QpGtixpAV47sMBqkMoA&usqp=CAU"
                  }
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {elements.source.name
                      ? elements.source.name
                      : "News Channel"}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {elements.title}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" href={elements.url} target="_blank">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Item>
          );
        })}
      </Box>
    </>
  );
}

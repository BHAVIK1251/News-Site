import React from "react";
import { Box, Tab, Tabs } from "@mui/material";
import { Link } from "react-router-dom";

export default function NavBar() {
  const myStyle = {
    textDecoration: "none",
    color: "rgb(0, 0, 0)",
  };

  return (
    <>
      <Box sx={{ width: "100%", mt: 1 }}>
        <Tabs aria-label="basic tabs example">
          <Link to="/" style={myStyle}>
            <Tab
              sx={{ fontWeight: "bold", fontSize: "18px" }}
              label="newssite"
            />
          </Link>
          <Link to="/business" style={myStyle}>
            <Tab label="business" />
          </Link>
          <Link to="/entertainment" style={myStyle}>
            <Tab label="entertainment" />
          </Link>
          <Link to="/health" style={myStyle}>
            <Tab label="health" />
          </Link>
          <Link to="/science" style={myStyle}>
            <Tab label="science" />
          </Link>
          <Link to="/sports" style={myStyle}>
            <Tab label="sports" />
          </Link>
          <Link to="/technology" style={myStyle}>
            <Tab label="technology" />
          </Link>
        </Tabs>
      </Box>
    </>
  );
}

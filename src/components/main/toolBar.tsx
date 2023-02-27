import React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";

export default function ToolBar() {
  return (
    <Box sx={{ flexGrow: 1,
    dispay: 'none' }}>
      <AppBar position="static">
        <Toolbar
          sx={{
            backgroundColor: "white",
          }}
        ></Toolbar>
      </AppBar>
    </Box>
  );
}

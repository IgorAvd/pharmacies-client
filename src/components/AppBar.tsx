import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Navigation } from "./Navigation";

export const AppBarComponent: React.FC = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
      <AppBar
        position="fixed"
        sx={{ backgroundColor: "#007eff", display: "flex" }}
      >
        <Toolbar style={{ height: "95px" }}>
          <Typography variant="h6" component="div">
            <Navigation />
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

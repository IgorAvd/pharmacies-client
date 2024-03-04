import { Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        <div style={{ display: "flex", gap: "16px" }}>
          <NavLink to="/" style={{ textDecoration: "none", color: "inherit" }}>
            Shop
          </NavLink>

          <NavLink
            to="/shopping-cart"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Shopping Cart
          </NavLink>
        </div>
      </Typography>
    </nav>
  );
};

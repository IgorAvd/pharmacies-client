import { Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export const Navigation = () => {
  return (
    <nav>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        <div style={{ display: "flex", gap: "16px" }}>
          <NavLink to="/" style={{ textDecoration: "none", color: "inherit" }}>
            Аптеки
          </NavLink>

          <NavLink
            to="/shopping-cart"
            style={{
              textDecoration: "none",
              color: "inherit",
              display: "flex",
              alignItems: "center",
            }}
          >
            <span style={{ marginRight: "5px" }}>Кошик</span>
            <ShoppingCartIcon />
          </NavLink>
        </div>
      </Typography>
    </nav>
  );
};

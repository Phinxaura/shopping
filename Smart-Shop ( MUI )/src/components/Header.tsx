import { AppBar, Toolbar, Typography, Button, Box, IconButton, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";

const Header: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();


  const cartItems = useAppSelector((state: RootState) => state.cart.cart);


  const totalQuantity = cartItems.reduce((sum: number, item) => sum + item.quantity, 0);

  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: "space-between" }}>
      <Typography
  variant="h6"
  onClick={() => (isAuthenticated ? navigate("/") : navigate("/login"))}
  sx={{
    cursor: "pointer",
    transition: "color 0.3s ease",
    "&:hover": {
      color: "#ffcc00", 
    },
  }}
>
  Smart Shop : Trendy Fits
</Typography>


        {isAuthenticated && (
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <IconButton color="inherit" onClick={() => navigate("/cart")}>
              <Badge badgeContent={totalQuantity} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            <Button color="inherit" onClick={logout}>
              Logout
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;

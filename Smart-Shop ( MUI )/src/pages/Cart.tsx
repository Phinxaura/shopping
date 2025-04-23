import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { updateQuantity, removeFromCart } from "../redux/cartSlice";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  TextField,
  Box,
  Divider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Cart: React.FC = () => {
  const cart = useSelector((state: RootState) => state.cart.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

 
  useEffect(() => {
    if (cart.length === 0) {
      navigate("/");
    }
  }, [cart, navigate]);


  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <Box p={2}>
      {cart.map((item) => (
        <Card
          key={item.id}
          sx={{ mb: 2, display: "flex", alignItems: "center", p: 1 }}
        >
          <CardMedia
            component="img"
            image={item.image}
            alt={item.title}
            sx={{ width: 100, height: 100, objectFit: "contain", m: 1 }}
          />
          <CardContent sx={{ flex: 1 }}>
            <Typography variant="h6">{item.title}</Typography>
            <Typography color="text.secondary">
              Price: ₹{item.price.toFixed(2)}
            </Typography>
            <Typography color="text.secondary">
              Total: ₹{(item.price * item.quantity).toFixed(2)}
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
              <TextField
                type="number"
                value={item.quantity}
                onChange={(e) => {
                  const qty = Math.max(1, +e.target.value); 
                  dispatch(updateQuantity({ id: item.id, quantity: qty }));
                }}
                sx={{ width: 80, mr: 2 }}
                inputProps={{ min: 1 }}
              />
              <Button
                onClick={() => dispatch(removeFromCart(item.id))}
                color="error"
                variant="outlined"
              >
                Remove
              </Button>
            </Box>
          </CardContent>
        </Card>
      ))}

   
      <Divider sx={{ my: 3 }} />
      <Typography
        variant="h5"
        textAlign="right"
        sx={{
          display: "inline-block", 
          padding: "10px 20px",
          borderRadius: "25px", 
          backgroundColor: "#1976d2", 
          color: "#fff", 
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", 
          cursor: "pointer", 
          ":hover": {
            backgroundColor: "#1565c0", 
            boxShadow: "0 6px 10px rgba(0, 0, 0, 0.2)", 
          },
        }}
      >
        Cart Total: ₹ {cartTotal.toFixed(2)} INR
      </Typography>
    </Box>
  );
};

export default Cart;

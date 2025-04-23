import { Card, CardMedia, CardContent, Typography, Button, Box } from "@mui/material";
import { Product } from "../../types/product";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addToCart } from "../../redux/cartSlice";
import "./ProductCard.css"; 

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart.cart);

 
  const isInCart = cart.some((item) => item.id === product.id);

  return (
    <Card className="product-card">
      <CardMedia
        component="img"
        image={product.image}
        alt={product.title}
        className="product-image"
      />
      <CardContent>
        <Typography variant="h6">{product.title}</Typography>
        <Typography color="text.secondary">₹{product.price.toFixed(2)}</Typography>
      </CardContent>
      <Box p={2}>
        <Button
          fullWidth
          variant={isInCart ? "contained" : "outlined"}
          color={isInCart ? "success" : "primary"}
          onClick={() => dispatch(addToCart({ ...product, quantity: 1 }))}
          className={isInCart ? "in-cart-button" : ""}
        >
          {isInCart ? "Added to Cart" : "Add to Cart"}
        </Button>
      </Box>
    </Card>
  );
};

export default ProductCard;

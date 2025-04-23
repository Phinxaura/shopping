import { useEffect, useState } from "react";
import { Product } from "../../types/product";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Box, Container, CircularProgress } from "@mui/material";

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  return (
    <Container>

      {loading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100vh"
        >
          <CircularProgress />
        </Box>
      ) : (
        <Box
          display="flex"
          flexWrap="wrap"
          gap={2}
          justifyContent="center"
          mt={2}
        >
          {products.map(product => (
            <Box key={product.id} width={{ xs: "100%", sm: "45%", md: "22%" }}>
              <ProductCard product={product} />
            </Box>
          ))}
        </Box>
      )}
    </Container>
  );
};

export default Home;

import { Box, Skeleton } from "@mui/material";
import "../../../index.css";
import ProductCard from "../../common/productCard/ProductCard";
import "./ItemList.css";

function ItemList({ items }) {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <section className="product-card-container">
      {items.length > 0
        ? items.map((item) => <ProductCard key={item.id} item={item} />)
        : arr.map((element) => (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
                padding: "40px 20px",
                justifyContent: "space-evenly ",
                alignItems: "center",
              }}
            >
              <Skeleton variant="rectangular" width={250} height={250} />

              <Skeleton variant="h3" height={30} width={200} />
              <Skeleton height={30} width={170} />
              <Skeleton height={30} width={150} />
            </Box>
          ))}
    </section>
  );
}

export default ItemList;

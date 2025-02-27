import Item from "./Item";
import { useEffect, useState } from "react";

const Shop = () => {
  const [itemsData, setItemsData] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setItemsData(data);
      });
  }, []);
  return (
    <div className="shop-format">
      {itemsData.map((item, index) => {
        return <Item key={index} itemData={item} />;
      })}
    </div>
  );
};

export default Shop;

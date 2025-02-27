import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

const Item = ({ itemNum }) => {
  const [itemData, setItemData] = useState({
    image: null,
    price: null,
    title: null,
  });

  const cartCount = useOutletContext()[0];
  const setCartCount = useOutletContext()[1];
  const [value, setValue] = useState(0);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setItemData({
          image: data[itemNum].image,
          price: data[itemNum].price,
          title: data[itemNum].title,
        });
      });
  }, [itemNum]);
  return (
    <div className="item-format">
      <img src={itemData.image} alt="item image" />
      <div className="item-content">
        <div className="title">{itemData.title}</div>
        <form
          action="submit"
          onSubmit={(e) => {
            e.preventDefault();
            setCartCount(cartCount + value);
          }}
        >
          <div>
            <label htmlFor="item-count">Number: </label>
            <input
              type="number"
              name="item-count"
              id="item-count"
              onChange={(e) => {
                setValue(Number(e.target.value));
              }}
              min={0}
            />
          </div>
          <button type="submit">Add to cart</button>
        </form>
      </div>
    </div>
  );
};

export default Item;

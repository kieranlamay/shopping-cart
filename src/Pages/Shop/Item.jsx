import { useState } from "react";
import { useOutletContext } from "react-router-dom";

const Item = ({ itemData }) => {
  const cartCount = useOutletContext()[0];
  const setCartCount = useOutletContext()[1];
  const [value, setValue] = useState(0);
  return (
    <div className="item-format">
      <img src={itemData.image} alt="item image" />
      <div className="item-content">
        <div className="title">{itemData.title}</div>
        <form
          action="submit"
          onSubmit={(e) => {
            e.preventDefault();
            setCartCount(Number(cartCount) + Number(value));
            setValue(0);
          }}
        >
          <div>
            <label htmlFor="item-count">Number: </label>
            <input
              type="number"
              name="item-count"
              id="item-count"
              onChange={(e) => {
                setValue(e.target.value);
              }}
              value={value}
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

import Item from "./Item";

const indexes = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
];

const Shop = () => {
  return (
    <div className="shop-format">
      {indexes.map((index) => {
        return <Item key={index} itemNum={index} />;
      })}
    </div>
  );
};

export default Shop;

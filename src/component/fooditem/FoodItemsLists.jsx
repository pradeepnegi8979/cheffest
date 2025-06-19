import Item from "./Item";
const FoodItemsLists = ({ items }) => {
  return (
    <>
      <ul className="list-group">
        {items.map((item) => (
          <Item key={item} foodItem={item} />
        ))}
      </ul>
    </>
  );
};
export default FoodItemsLists;

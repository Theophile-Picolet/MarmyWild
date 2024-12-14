import MenuItem from "./MenuItem";
import "./App";

function MenuList({ foodItems }) {
  console.log(foodItems);

  return (
    <>
      {foodItems.map((item)=> (
        <MenuItem key={item.name} item={item} />
      )
    )}
    </>
  );
}

export default MenuList;
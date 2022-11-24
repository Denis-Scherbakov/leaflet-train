import { ListItem } from "../list-item/List-item";
import { Menu } from "antd";
import { Rnd } from "react-rnd";
import { useSelector } from "react-redux";
import styles from "./list.css";
import { setNewCoordinates } from "../../redux/coordinatesSlice";
import { useDispatch } from "react-redux";

export function List() {
  const dispatch = useDispatch();
  const listItems = useSelector((state) => state.list);

  const items = listItems.map((item) => {
    const path = item.path.split(" ");
    return {
      label: (
        <ListItem
          listItem={item}
          load={path[0]}
          unload={path[2]}
          handleListClick={handleListClick}
        />
      ),
      key: item.id,
    };
  });

  function handleListClick(item) {
    console.log("e", item);
    dispatch(setNewCoordinates(item));
  }

  return (
    <Rnd
      style={{
        position: "relative",
        "border-right": "3px outset lightgrey",
      }}
      className={styles.wrapper}
      disableDragging={true}
      enableResizing={{
        top: false,
        right: true,
        bottom: false,
        left: false,
        topRight: false,
        bottomRight: false,
        bottomLeft: false,
        topLeft: false,
      }}
    >
      <div id="menuWrapper">
        <Menu id="test" items={items}></Menu>
      </div>
    </Rnd>
  );
}

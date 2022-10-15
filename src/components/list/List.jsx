import { ListItem } from "../list-item/List-item";
import { Menu } from "antd";
import { Rnd } from "react-rnd";
import styles from "./list.css";

export function List() {
  const items = [
    { label: <ListItem />, key: "item-1" }, // remember to pass the key prop
  ];

  return (
    <Rnd
      style={{ position: "relative" }}
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
      <Menu className="test" items={items}></Menu>
    </Rnd>
  );
}

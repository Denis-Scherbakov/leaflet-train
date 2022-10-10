import { Menu } from "antd";
import styles from "./list.module.css";
import { Rnd } from "react-rnd";

export function List() {
  const items = [
    { label: "item 1", key: "item-1" }, // remember to pass the key prop
    { label: "item 2", key: "item-2" }, // which is required
  ];

  return (
    <Rnd
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
      <Menu items={items} />
    </Rnd>
  );
}

import { Menu } from "antd";
import styles from "./list.module.css";

export function List() {
  const items = [
    { label: "item 1", key: "item-1" }, // remember to pass the key prop
    { label: "item 2", key: "item-2" }, // which is required
  ];

  return (
    <div className={styles.wrapper}>
      <Menu items={items} />
    </div>
  );
}

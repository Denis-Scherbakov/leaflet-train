import { ListItem } from "../list-item/List-item";
import { Menu } from "antd";
import { Rnd } from "react-rnd";
import { useSelector } from "react-redux";
import styles from "./list.css";

export function List() {
  const listItems = useSelector((state) => state.list);

  const items = listItems.map((item) => {
    const path = item.path.split(" ");
    console.log(path[0]);
    return {
      label: <ListItem listItem={item} load={path[0]} unload={path[2]} />,
      key: item.id,
    };
  });

  return (
    <Rnd
      style={{ position: "relative", with: "500px" }}
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
      <Menu id="test" items={items}></Menu>
    </Rnd>
  );
}

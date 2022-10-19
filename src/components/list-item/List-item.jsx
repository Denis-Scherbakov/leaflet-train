import { Select } from "antd";
import styles from "./list-item.module.css";

export function ListItem() {
  const { Option } = Select;
  return (
    <div className={styles.wrapper}>
      <h2>asdasd</h2>
      <ul className={styles.listItem_ul}>
        <li>
          <div>Погрузка:</div>
          <Select className={styles.listItem_select}>
            <Option value="lucy">lucy</Option>
          </Select>
        </li>
        <li>
          <div>Разгрузка:</div>
          <Select className={styles.listItem_select}>
            <Option value="lucy">lucy</Option>
          </Select>
        </li>
      </ul>
    </div>
  );
}

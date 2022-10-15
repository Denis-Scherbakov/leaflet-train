import { Select } from "antd";
import styles from "./list-item.module.css";

export function ListItem() {
  const { Option } = Select;
  return (
    <div className={styles.wrapper}>
      <div className="DQDQWDWDQW">Погрузка</div>
      <div>Разгрузка</div>
      <Select>
        <Option value="lucy">lucy</Option>
      </Select>
      <div>asdasd</div>
    </div>
  );
}

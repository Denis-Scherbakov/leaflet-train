import { Select } from "antd";
import { useSelector } from "react-redux";
import styles from "./selectCoordinates.module.css";

export function SelectCoordinates({ value, handleSelectCoordinates, type }) {
  const mapItems = useSelector((state) => state.map);
  const { Option } = Select;

  return (
    <Select
      className={styles.listItem_select}
      value={value}
      onSelect={(e) => handleSelectCoordinates(e, type)}
    >
      {mapItems.map((item) => (
        <Option key={item.id} value={item.coordinates}>
          {item.name}
        </Option>
      ))}
    </Select>
  );
}

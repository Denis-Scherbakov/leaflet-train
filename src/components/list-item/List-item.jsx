import { SelectCoordinates } from "../select-coordinates/SelectCoordinates";
import styles from "./list-item.module.css";

export function ListItem({ listItem, load, unload }) {
  return (
    <div className={styles.wrapper}>
      <h2>{listItem.path}</h2>
      <ul className={styles.listItem_ul}>
        <li>
          <div>Погрузка:</div>
          <SelectCoordinates value={load} />
        </li>
        <li>
          <div>Разгрузка:</div>
          <SelectCoordinates value={unload} />
        </li>
      </ul>
    </div>
  );
}

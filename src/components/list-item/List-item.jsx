import { SelectCoordinates } from "../select-coordinates/SelectCoordinates";
import styles from "./list-item.module.css";

export function ListItem({ listItem, load, unload, handleListClick }) {
  const handleSelectCoordinates = (e, type) => {
    console.log("ASD", e, type, listItem.id);
    //добавть сюда диспатч экшнов для изменения погрузки/разгрузки и изменения отображения и расчета путей на карте
  };
  return (
    <div className={styles.wrapper} onClick={() => handleListClick(listItem)}>
      <h2>{listItem.path}</h2>
      <ul className={styles.listItem_ul}>
        <li>
          <div>Погрузка:</div>
          <SelectCoordinates
            value={load}
            listItemId={listItem.id}
            handleSelectCoordinates={handleSelectCoordinates}
            type={"Погрузка"}
          />
        </li>
        <li>
          <div>Разгрузка:</div>
          <SelectCoordinates
            value={unload}
            listItemId={listItem.id}
            handleSelectCoordinates={handleSelectCoordinates}
            type={"Разгрузка"}
          />
        </li>
      </ul>
    </div>
  );
}

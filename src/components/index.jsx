import { List } from "./list/List";
import { Map } from "./map/Map";
import styles from "./deliveryModule.module.css";

export function DeliveryModule(props) {
  return (
    <div className={styles.wrapper}>
      <List />
      <div className={styles.mapWrapper}>
        <Map />
      </div>
    </div>
  );
}

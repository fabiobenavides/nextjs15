import EventItem from "./event-item";
import styles from './event-list.module.css';

export default function EventList(props) {
  return (
    <ul className={styles.list}>
      {props.items.map((event) => (<EventItem key={event.id} event={event} />))}
    </ul>
  )
}

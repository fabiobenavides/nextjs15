import Link from "next/link";
import styles from './event-item.module.css';

export default function EventItem(props) {

    const { event } = props;
    const humanReadableDate = new Date(event.date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    const formattedAddress = event.location.replace(', ', '\n');

  return (
    <li className={styles.item}>
        <img src={`/${event.image}`} alt={event.title} />
        <div className={styles.content}>
            <div className={styles.summary}>
                <h2>{event.title}</h2>
                <div className={styles.date}>
                    <time>{humanReadableDate}</time>
                </div>
                <div className={styles.address}>
                    <address>{formattedAddress}</address>
                </div>
            </div>
            <div className={styles.actions}>
                <Link href={`/events/${event.id}`}>Explore Event</Link> 
            </div>
        </div>
    </li>
  )
}

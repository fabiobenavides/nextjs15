import styles from './event-item.module.css';
import Button from "../ui/button";
import DateIcon from '../icons/date-icon';
import AddressIcon from '../icons/address-icon';
import ArrowRightIcon from '../icons/arrow-right-icon';

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
                    <DateIcon />
                    <time>{humanReadableDate}</time>
                </div>
                <div className={styles.address}>
                    <AddressIcon />
                    <address>{formattedAddress}</address>
                </div>
            </div>
            <div className={styles.actions}>
                <Button link={`/events/${event.id}`}>
                    <span>Explore Event</span>
                    <span className={styles.icon}>
                        <ArrowRightIcon />
                    </span>
                </Button>
            </div>
        </div>
    </li>
  )
}

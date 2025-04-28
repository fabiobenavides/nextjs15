import Link from 'next/link'
import styles from './button.module.css'

export default function Button(props) {
  return (
    <Link className={styles.btn} href={props.link}>
        {props.children}
    </Link>
  )
}

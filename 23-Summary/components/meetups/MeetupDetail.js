import { Fragment } from "react/jsx-runtime";
import classes from './MeetupDetail.module.css'

export default function MeetupDetail(props) {
  return (
      <section className={classes.detail}>
          <img src={props.image} 
                alt={props.title} 
                style={{width: '100%'}} />
          <h1>{props.title}</h1>
          <address>{props.address}</address>
          <p>{props.description}</p>
      </section>
    )
}

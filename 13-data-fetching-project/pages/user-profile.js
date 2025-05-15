import { Fragment } from "react";

export default function UserProfile(props) {
  return (
    <Fragment>
      <h1>{props.username}</h1>
    </Fragment>
  );
}

export async function getServerSideProps(context) {
    const {  params, req, res } = context;

    console.log(req);
    console.log(res);

    return {
        props: {
            username: 'Fabio'
        }
    };
}
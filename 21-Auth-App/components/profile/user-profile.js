import ProfileForm from './profile-form';
import classes from './user-profile.module.css';
import { useSession } from 'next-auth/react';

function UserProfile() {
  const { data: session, status } = useSession();
  
  if (status === 'loading') {
    return <p>Loading...</p>;
  }
  if (!session) {
    window.location.href = '/auth';
    return null;
  }

  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm />
    </section>
  );
}

export default UserProfile;

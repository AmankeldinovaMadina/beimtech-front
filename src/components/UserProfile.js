// UserProfile.js or UserProfile.tsx
import React from 'react';
import styles from './UserProfile.module.css';

const UserProfile = ({ firstName, lastName, ranking }) => {
  return (
    <div className={styles.profileCard}>
      <div className={styles.userDetails}>
        <div className={styles.avatarPlaceholder}></div>
        <div className={styles.userInfo}>
          <h1 className={styles.firstName}>{firstName}</h1>
          <h1 className={styles.lastName}>{lastName}</h1>
          <p className={styles.ranking}>Ranking: {ranking}/30</p>
        </div>
      </div>
      <button className={styles.editButton}>Edit Profile</button>
    </div>
  );
};

export default UserProfile;


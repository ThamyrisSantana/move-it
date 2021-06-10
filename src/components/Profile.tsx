import styles from "../styles/components/Profile.module.css";

export const Profile = () => {
  return (
    <div className={styles.profileContainer}>
      <img
        src="https://github.com/ThamyrisSantana.png"
        alt="Thamyris Sat'Ana"
      />
      <div>
        <strong>Thamyris Sant'Ana</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 1
        </p>
      </div>
    </div>
  );
};

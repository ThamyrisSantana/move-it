import styles from "../styles/ExperienceBar.module.css";

export const ExperienceBar = () => {
  return (
    <div>
      <header className={styles.experienceBar}>
        <span> 0xp</span>
        <div>
          <div style={{ width: "50%" }} />
          <span className={styles.currentExperience} style={{ left: "50%" }}>
            300 xp
          </span>
        </div>
        <span>600 xp</span>
      </header>
    </div>
  );
};

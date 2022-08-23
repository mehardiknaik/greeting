import React from "react";
import Tilt from "react-parallax-tilt";
import styles from "../styles/TiltWidget.module.scss";

const TiltWidget = ({ name }) => {
  return (
    <Tilt
      gyroscope={true}
      tiltMaxAngleX={45}
      tiltMaxAngleY={45}
      perspective={500}
      tiltAngleXInitial={0}
      tiltAngleYInitial={0}
      className={styles.parallaxEffect}
    >
      <div className={styles.innerElement}>Lazy</div>
      <div className={styles.innerElement2}>{name}</div>
      <div className={styles.innerElement3}>☺</div>
    </Tilt>
  );
};

export default TiltWidget;

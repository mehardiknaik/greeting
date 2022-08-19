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
      <div className={styles.innerElement}>
        <div>Hello</div>
        <div>{name}</div>
        <div>☺</div>
      </div>
    </Tilt>
  );
};

export default TiltWidget;

"use client";

import { useState } from "react";
import styles from "./ToggleSwitch.module.css";

export default function ToggleSwitch() {
  const [isOn, setIsOn] = useState(false);

  return (
    // Botão Switch paras perguntas
    <div 
      className={`${styles.switch} ${isOn ? styles.on : ""}`}
      onClick={() => setIsOn(!isOn)}
    >
      <div className={styles.knob}></div>
    </div>
  );
}

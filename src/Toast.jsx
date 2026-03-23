import React from "react";
import { styles } from "./styles.js";

function Toast({ message }) {
  return message ? <div style={styles.toast}>{message}</div> : null;
}

export default Toast;

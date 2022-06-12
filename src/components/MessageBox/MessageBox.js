import React from "react";
import "../MessageBox/MessageBox.css";

export default function MessageBox({ error }) {
  return <div className='message-box'>{error}</div>;
}

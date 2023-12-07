import React, { useState } from "react";
import CVZip from '../../Assets/Documents/TdroidCV.zip'
import './button.css';

export const DownloadButton = () => {

  const [timeButton, setTime] = useState("glow-on-hover");
  const [buttonText, setText] = useState("Download CV")

  function mouseEnter(element) {
    setTime("hoverStart")
    setText("Thanks! <3")
    setTimeout(() => {
      setTime("glow-on-hover")
      setText("Download CV")
    }, 5000)
  }

  return (
    <button className={timeButton} id="downloadButton" onClick={mouseEnter}>
      <a href={CVZip} id="downloadBTN" download="TdroidCV_Richard.zip" type="application/pdf">{buttonText}
      </a>
      </button>
  )
}
import React, { useRef, useState } from "react"

const Timer = () => {
  const [min, setMin] = useState(0)
  const [sec, setSec] = useState(0)
  const timerRef = useRef()
  // Play And Stop Btn
  const Play = () => {
    timerRef.current = setInterval(() => {
      setSec((sec) => sec - 1)
    }, 1000)
  }
  const Stop = () => {
    clearInterval(timerRef.current)
  }
  const Clear = () => {
    setMin(0)
    setSec(0)
  }

  if (sec < 0 && min > 0) {
    setMin(min - 1)
    setSec(59)
  } else if (sec === 0) {
    Stop()
  }

  //Plus & Minus Btn
  const MinPlus = () => {
    setMin(min + 1)
  }
  const MinMinus = () => {
    setMin(min - 1)
    if (min <= 0) {
      setMin(0)
    }
  }
  const SecPlus = () => {
    setSec(sec + 1)
  }
  const SecMinus = () => {
    setSec(sec - 1)
    if (sec <= 0) {
      setSec(0)
    }
  }

  return (
    <div className="Timer">
      <h1>TIMER</h1>
      <span className="num">
        {min < 10 ? `0${min}` : min} : {sec < 10 ? `0${sec}` : sec}
      </span>{" "}
      <br />
      <div className="btn">
        <div className="min">
          <h1>Min</h1>
          <button className="add" onClick={MinPlus}>
            +
          </button>
          <button className="sub" onClick={MinMinus}>
            -
          </button>
        </div>
        <button className="add" onClick={Play}>
          Play
        </button>
        <button className="add" onClick={Clear}>
          Clear
        </button>
        <button className="add" onClick={Stop}>
          Stop
        </button>
        <div className="sec">
          <h1>Sec</h1>
          <button className="add" onClick={SecPlus}>
            +
          </button>
          <button className="sub" onClick={SecMinus}>
            -
          </button>
        </div>
      </div>
    </div>
  )
}

export default Timer

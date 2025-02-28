import { useState } from "react"

function DynamicStyle() {
  const [clicked, setClicked] = useState(0);

  const boxStyle = {
    width: "200px",
    height: "100px",
    backgroundColor: clicked ? "orange" : "grey",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "20px",
    cursor: "pointer",
  }
  return (
    <>
      <div style={boxStyle} onClick={() => setClicked(!clicked)}>
        {clicked ? "클릭됨" : "클릭하세요"}
      </div>
    </>
  )
}

export default DynamicStyle
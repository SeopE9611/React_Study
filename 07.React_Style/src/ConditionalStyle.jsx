import { useState } from "react"

function ConditionalStyle() {
  const [isActive, setIsActive] = useState(false)
  return (
    <div>
      <button onClick={() => setIsActive(!isActive)}
        style={{
          backgroundColor: isActive ? "blue" : "red",
          color: "white",
          padding: "10px 20px",
          border: "none",
          cursor: "pointer",
        }}
      >
        {isActive ? "활성화됨" : "비활성화됨"}
      </button>
    </div>
  )
}

export default ConditionalStyle
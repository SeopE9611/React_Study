// Button.jsx

import "./Button.css" // Button css파일 import

function ButtonCustom({ type }) { // type props 설정
  return (
    <>
      <button className={
        `button ${type === "primary" ? "primary" : "secondary"}`}>
        커스텀 버튼
      </button>
    </>
  )
}

export default ButtonCustom
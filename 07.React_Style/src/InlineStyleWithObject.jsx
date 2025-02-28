function InlineStyleWithObject() {

  const titleStyle = {
    color: "purple",
    fontSize: "26px",
    textAligin: "center",
  }

  const buttonStyle = {
    backgroundColor: "green",
    color: "white",
    padding: "10px, 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer"
  }
  return (
    <div>
      <h2 style={titleStyle}>스타일 객체로 적용하기</h2>
      <button style={buttonStyle}>스타일 적용된 버튼</button>
    </div>
  )
}
export default InlineStyleWithObject
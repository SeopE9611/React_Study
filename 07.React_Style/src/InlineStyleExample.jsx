function InlineStyleExample() {
  return (
    <div>
      {/* HTML 방식 (잘못된 코드*/}
      {/* <h1 style="color:red; font-size:20px">안녕하세요</h1> */}

      {/* React 방식 (객체 사용) */}
      <h1 style={{ color: "red", fontSize: "20px" }}>안녕하세요</h1>
    </div>
  )
}

export default InlineStyleExample
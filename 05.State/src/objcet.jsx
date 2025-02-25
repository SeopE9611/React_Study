import { useState } from "react"

function UserProfile() {
  const [user, setUser] = useState({ name: "섭이", age: 20 })

  const updataNmae = () => {
    // 이름만 변경하면서 기존 객체의 데이터를 유지하는 함수
    setUser((prevUser) => ({ ...prevUser, name: "행섭" }))
  }
  return (
    <div>
      <h2>사용자 정보</h2>
      <p>이름: {user.name} </p>
      <p>나이:{user.age} </p>
      <button onClick={updataNmae}>이름 변경</button>
    </div>
  )
}

export default UserProfile
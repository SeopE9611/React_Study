import { useState } from "react"

function UserProfile() {
  const [user, setUser] = useState({ name: "섭이", age: 20 })

  const updataNmae = () => {
    setUser({ name: "행섭" }) // age 값이 사라지는 현상 발생
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
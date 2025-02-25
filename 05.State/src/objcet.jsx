import { useState } from "react"

function UserProfile() {
  const [user, setUser] = useState({ name: "섭이", age: 20, city: "Seoul" })

  const updataNmae = () => {
    setUser((prevUser) => ({ ...prevUser, name: "행섭", age: prevUser.age + 1 })) // 1증가

  }
  return (
    <div>
      <h2>사용자 정보</h2>
      <p>이름: {user.name} </p>
      <p>나이:{user.age} </p>
      <p>도시: {user.city}</p>
      <button onClick={updataNmae}>이름 변경</button>
    </div>
  )
}

export default UserProfile
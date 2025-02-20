// App.jsx

import Greeting from "./Greeting";
import Profile from "./Profile";
import UserList from "./UserList";

function App() {
  const UserNames = ['스기따라', '죡팡', '힝카인']
  const userInfo = { name: "섭이", age: 20, job: "백수" } // props로 객체 전달
  return (
    <>
      <Greeting name="섭이" age={20} job="백수" />
      <Greeting name="행섭" age={21} job="비숍" />
      <br />
      <UserList users={UserNames} />
      <br />
      <Profile user={userInfo} /> {/* 리스트 출력 */}
    </>
  )
}

export default App
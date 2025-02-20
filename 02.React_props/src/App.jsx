// App.jsx

import Greeting from "./Greeting";
import Profile from "./Profile";
import UserList from "./UserList";

function App() {
  const UserNames = ['스기따라', '죡팡', '힝카인']
  const userInfo = { age: 20, job: "백수" }
  return (
    <>
      <Greeting /> {/* props 없이 사용 */}
      <Greeting name="행섭" age={21} job="비숍" />
      <br />
      <UserList users={UserNames} />
      <br />
      <Profile user={userInfo} />
    </>
  )
}

export default App
// App.jsx

import Greeting from "./Greeting";
import UserList from "./UserList";

function App() {
  const UserNames = ['스기따라', '죡팡', '힝카인']
  return (
    <>
      <Greeting name="섭이" age={20} job="백수" />
      <Greeting name="행섭" age={21} job="비숍" />
      <br />
      <UserList users={UserNames} />
      <br />
    </>
  )
}

export default App
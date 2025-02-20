// App.jsx

import Card from "./Card"

function App() {
  return (
    <div>
      <Card>
        <h2>카드 컴포넌트 입니다.</h2>
        <p>원하는 내용 입력 가능</p>
      </Card>

      <Card>
        <button>버튼 기능 추가 가능</button>
      </Card>
    </div>
  )
}

export default App
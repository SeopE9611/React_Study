// App.jsx

import Card from "./Card"
import Layout from "./Layout"
import Color from "./Color"

function App() {
  return (
    <div>
      <Layout>

        <Card>
          <h2>카드 컴포넌트 입니다.</h2>
          <p>원하는 내용 입력 가능</p>
        </Card>

        <Color backgroundColor="lightblue" >
          <p>연한 파란색</p>
        </Color>

        <Color backgroundColor="lightpink" >
          <p>연한 핑크색</p>
        </Color>

        <Card>
          <button>버튼 기능 추가 가능</button>
        </Card>

      </Layout>
    </div>
  )
}

export default App
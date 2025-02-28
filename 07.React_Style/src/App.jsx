// App.jsx

import "./App.css" // css 파일 import
import Header from "./Header" // 헤더 컴포넌트 import

function App() {
  return (
    <div className="container">
      <Header /> {/* Header 컴포넌트 */}
      <h2 className="title">일반 CSS 파일 적용</h2>
      <button className="button">버튼</button>
    </div>
  )
}
export default App
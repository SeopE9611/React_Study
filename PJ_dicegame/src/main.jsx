import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx' // 루트 컴포넌트 가져오기

// HTML에서 id가 root인 요소를 찾아 루트 컴포넌트를 렌더링하고
// createRoot 함수를 사용하여 렌더링을 시작한다.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

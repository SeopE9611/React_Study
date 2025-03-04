import ReviewList from './ReviewList';
import mokData from '../mock.json';
import ReviewForm from './ReviewForm';
import { useState } from 'react';
function App() {
  const [reviews, setReviews] = useState(mokData); // 리뷰 데이터 관리

  // 리뷰 삭제 함수
  const handleDeleteReview = (id) => { // 삭제할 리뷰의 id를 전달받음
    console.log('삭제할 리뷰 id', id); 
    setReviews(reviews.filter(review => review.id !== id)); // id와 일치하는 리뷰를 제외한 새로운 배열로 리뷰 데이터 업데이트
  }

  // 리뷰 수정 함수
  const handleEditReview = (updateReview) => { // 수정할 리뷰 데이터를 전달받음
    console.log('수정된 리뷰:', updateReview);
    // id가 일치하는 리뷰를 찾아 수정된 리뷰로 업데이트
    setReviews(
      reviews.map((review) => // map 함수를 사용하여 리뷰 데이터를 순회
        review.id === updateReview.id ? updateReview : review // id가 일치하면 수정된 리뷰로 업데이트, 아니면 기존 리뷰 유지
      )
    )
  }
  return (
    <div>
      <h1>영화 리뷰</h1>
      {/* 리뷰 작성폼이 들어갈 자리 */}
      <ReviewForm />
      {/* 리뷰 리스트 컴포넌트가 들어갈 자리 */}
      <ReviewList reviews={reviews} onDelete={handleDeleteReview} onEdit={handleEditReview}/> {/* 리뷰 데이터와 리뷰 삭제 함수를 props로 전달 */}
    </div>
  );
}
export default App;

import ReviewList from './ReviewList';
import mockData from '../mock.json';
import ReviewForm from './ReviewForm';
import { useState } from 'react';
function App() {
  const [reviews, setReviews] = useState(mockData); // 리뷰 데이터 관리
  const [sortOrder, setSortOrder] = useState(null); // 정렬 순서 상태 관리 (null: 정렬하지 않음, latest: 최신순, best: 평점순)
  const [visibleCount, setVisibleCount] = useState(5); // 보이는 리뷰 개수 상태 관리 (처음에는 5개만 보이도록 설정)

  // 리뷰 추가 함수
  const handleAddReview = (newReview) => {
    setReviews([newReview, ...reviews]); // 새 리뷰를 배열 맨 앞에 추가하여 리뷰 데이터 업데이트
  };

  // 리뷰 삭제 함수
  const handleDeleteReview = (id) => {
    // 삭제할 리뷰의 id를 전달받음
    console.log('삭제할 리뷰 id', id);
    setReviews(reviews.filter((review) => review.id !== id)); // id와 일치하는 리뷰를 제외한 새로운 배열로 리뷰 데이터 업데이트
  };

  // 리뷰 수정 함수
  const handleEditReview = (updateReview) => {
    // 수정할 리뷰 데이터를 전달받음
    console.log('수정된 리뷰:', updateReview);
    // id가 일치하는 리뷰를 찾아 수정된 리뷰로 업데이트
    setReviews(
      reviews.map(
        (
          review // map 함수를 사용하여 리뷰 데이터를 순회
        ) => (review.id === updateReview.id ? updateReview : review) // id가 일치하면 수정된 리뷰로 업데이트, 아니면 기존 리뷰 유지
      )
    );
  };

  // 리뷰 더보기 클릭 시 실행되는 함수 (추가 리뷰 로드)
  const loadMoreReviews = () => {
    console.log('더보기 버튼 클릭 - 현재 표시된 리뷰 수:', visibleCount);
    setVisibleCount((prev) => prev + 5); // 보이는 리뷰 개수 5개씩 추가
  };

  // 정렬된 리뷰 목록 생성
  const sortedReviews = sortOrder // 정렬 순서가 있을 때만 정렬
    ? [...reviews].sort(
        // 리뷰 데이터를 복사하고 정렬 (...reviews는 reviews 배열을 복사한 것) a,b는 비교할 두 리뷰 데이터
        (a, b) => (sortOrder === 'latest' ? b.createdAt - a.createdAt : b.rating - a.rating) // 정렬 순서가 'latest'면 최신순, 아니면 평점순으로 정렬
      )
    : reviews; // 정렬 순서가 없으면 원본 리뷰 데이터 반환

  // 정렬 변경 함수
  const handleSortChange = (order) => {
    console.log('정렬 순서 변경', order);
    setSortOrder(order); // 정렬 순서 상태 업데이트
  };

  return (
    <div>
      <h1>영화 리뷰</h1>
      {/* 리뷰 작성폼 */}
      <ReviewForm onAddReview={handleAddReview} />
      {/* 리뷰 정렬 */}
      <div>
        <button onClick={() => handleSortChange('latest')}>최신순</button>
        <button onClick={() => handleSortChange('best')}>베스트순</button>
      </div>
      {/* 리뷰 리스트 */}
      <ReviewList
        // reviews={reviews} // 리뷰 데이터를 props로 전달
        // reviews={sortedReviews} // 정렬된 리뷰 데이터를 props로 전달
        reviews={sortedReviews.slice(0, visibleCount)} // 정렬된 리뷰 데이터 중 visibleCount 개수만큼 잘라서 props로 전달 (slice 함수 사용 start:0, end:visibleCount)
        onDelete={handleDeleteReview} // 리뷰 삭제 함수를 props로 전달
        onEdit={handleEditReview} // 리뷰 수정 함수를 props로 전달
      />

      {/* 리뷰 더보기 버튼 */}
      {visibleCount < reviews.length && ( // 보이는 리뷰 개수가 전체 리뷰 개수보다 작을 때만 렌더링
        <button onClick={loadMoreReviews}>더보기</button>
      )}
    </div>
  );
}
export default App;

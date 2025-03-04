import ReviewCard from './ReviewCard'

// ReviewList 컴포넌트 정의, reviews 배열을 props로 받음
function ReviewList({reviews, onDelete}) { // 리뷰 데이터와 리뷰 삭제 함수를 props로 전달받음
  // console.log(items);

  return (
    <div>
      {/* map 함수를 사용하여 reviews 배열의 각 요소에 대해 ReviewCard 컴포넌트를 렌더링 */}
      {reviews.map((review) => (
        // 각 ReviewCard 컴포넌트에 고유한 key와 review props를 전달
        <ReviewCard key ={ review.id } review={review} onDelete={onDelete}/>  // 리뷰 데이터와 리뷰 삭제 함수를 props로 전달
      ))}
    </div>
  )
}

export default ReviewList;

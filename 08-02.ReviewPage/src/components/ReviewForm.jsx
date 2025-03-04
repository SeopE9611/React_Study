import { useState } from 'react';
import StarRating from './StarRating';

function ReviewForm() {
  const [title, setTitle] = useState(''); // 리뷰 제목
  const [content, setContent] = useState(''); // 리뷰 내용
  const [rating, setRating] = useState(0); // 별점

  const handleSubmit = (e) => {
    // 리뷰 등록 이벤트 핸들러
    e.preventDefault(); // 폼의 기본 동작 방지
    console.log({ title, content, rating });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text" // 입력 타입
        value={title} // 제목 입력값
        onChange={(e) => setTitle(e.target.value)} // 제목 입력값 변경 이벤트 핸들러
        placeholder="제목입력" // 입력창에 표시될 텍스트
      />
      <textarea
        value={content} // 내용 입력값
        onChange={(e) => setContent(e.target.value)} // 내용 입력값 변경 이벤트 핸들러
        placeholder="리뷰내용 입력"
      />
      <StarRating rating={rating} setRating={setRating} />
      <button type="submit">등록</button>
    </form>
  );
}

export default ReviewForm;

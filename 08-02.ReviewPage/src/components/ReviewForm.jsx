import { useRef, useState } from 'react';
import StarRating from './StarRating';

function ReviewForm({ onAddReview }) {
  // 리뷰 추가 함수를 props로 전달
  const [title, setTitle] = useState(''); // 리뷰 제목
  const [content, setContent] = useState(''); // 리뷰 내용
  const [rating, setRating] = useState(0); // 별점
  const [image, setImage] = useState(null); // 이미지 상태
  const [preview, setPreview] = useState(null); // 이미지 미리보기 상태
  const fileInputRef = useRef(null); // 파일 입력 필드 초기화를 위한 ref 객체 생성

  // 이미지 선택 시 실행되는 함수
  const handleImageChange = (e) => {
    // 이벤트 객체 생성
    const file = e.target.files[0]; // 파일 객체 생성, 파일은 배열로 전달되므로 첫 번째 요소 선택
    if (file) {
      // 파일이 존재할 경우
      setImage(file); // 이미지 상태 업데이트
      setPreview(URL.createObjectURL(file)); // 이미지 미리보기 상태 업데이트
    }
  };

  const handleSubmit = (e) => {
    // 리뷰 등록 이벤트 핸들러
    e.preventDefault(); // 폼 제출 시 새로고침 방지
    // console.log({ title, content, rating });
    if (!title.trim() || !content.trim() || rating === 0) {
      alert('모든 항목을 입력하세요'); // 제목, 내용, 별점이 입력되지 않았을 경우 경고창 출력
      return;
    }
    // 새 리뷰 객체 생성
    const newReview = {
      id: Date.now(),
      title,
      content,
      rating,
      imgUrl: preview || 'https://via.placeholder.com/150', // 이미지가 없을 경우 대체 이미지
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };

    console.log('새로운 리뷰 등록', newReview);

    onAddReview(newReview); // 부모 컴포넌트(App)로 새 리뷰 전달

    // 입력 폼 초기화 작업
    setTitle(''); // 제목 초기화
    setContent(''); // 내용 초기화
    setRating(0); // 별점 초기화
    setImage(null); // 이미지 초기화
    setPreview(null); // 미리보기 이미지 초기화

    // 파일 입력 필드 초기화 (파일명 제거)
    // 파일 입력 필드가 존재할 경우
    if (fileInputRef.current) {
      fileInputRef.current.value = ''; // 파일 선택 필드 초기화
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text" // 입력 타입
        value={title} // 제목 입력값
        onChange={(e) => setTitle(e.target.value)} // 제목 입력값 변경 이벤트 핸들러
        placeholder="제목입력" // 입력창에 표시될 텍스트
        ref={fileInputRef} // 파일 입력 필드 초기화를 위한 ref 설정
      />
      <textarea
        value={content} // 내용 입력값
        onChange={(e) => setContent(e.target.value)} // 내용 입력값 변경 이벤트 핸들러
        placeholder="리뷰내용 입력"
      />
      <input type="file" accept="image/*" onChange={handleImageChange} /> /{/* 이미지 업로드 */}
      {preview && <img src={preview} alt="미리보기" style={{ width: 100, marginTop: 10 }} />}
      <StarRating rating={rating} setRating={setRating} />
      <button type="submit">등록</button>
    </form>
  );
}

export default ReviewForm;

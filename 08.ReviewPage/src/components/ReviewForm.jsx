import { useState } from 'react';
import PropTypes from 'prop-types';
import StarRating from './StarRating';

function ReviewForm({ onAddReview }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [rating, setRating] = useState(0);
  const [setImageFile] = useState(null);
  const [preview, setPreview] = useState('');
  const [errors, setErrors] = useState({});

  // 파일 선택 시 미리보기 처리
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview('');
    }
  };

  // 입력값 유효성 검사
  const validate = () => {
    const newErrors = {};
    if (!title.trim()) {
      newErrors.title = '제목을 입력하세요';
    }
    if (!content.trim()) {
      newErrors.content = '리뷰 내용을 입력하세요';
    }
    if (rating === 0) {
      newErrors.rating = '별점을 선택하세요';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }
    const timestamp = Date.now();
    // 여기서는 업로드한 이미지를 미리보기(base64) URL로 사용합니다.
    const newReview = {
      id: timestamp, // 고유 ID로 timestamp 사용
      title,
      content,
      rating,
      imgUrl: preview || '', // 업로드한 이미지 미리보기 URL 사용
      createdAt: timestamp,
      updatedAt: timestamp,
    };
    onAddReview(newReview);
    // 폼 리셋
    setTitle('');
    setContent('');
    setRating(0);
    setImageFile(null);
    setPreview('');
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
      <div>
        <label>영화 이미지 업로드: </label>
        <input 
          type="file" 
          accept="image/*" 
          onChange={handleFileChange}
        />
        {preview && (
          <div>
            <img src={preview} alt="미리보기" style={{ width: '100px', marginTop: '0.5rem' }} />
          </div>
        )}
      </div>
      <div>
        <label>제목: </label>
        <input 
          type="text" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)}
          placeholder="제목 입력"
        />
        {errors.title && <div style={{ color: 'red' }}>{errors.title}</div>}
      </div>
      <div>
        <label>리뷰 내용: </label>
        <textarea 
          value={content} 
          onChange={(e) => setContent(e.target.value)}
          placeholder="리뷰 작성"
        />
        {errors.content && <div style={{ color: 'red' }}>{errors.content}</div>}
      </div>
      <div>
        <label>별점: </label>
        <StarRating rating={rating} setRating={setRating} />
        {errors.rating && <div style={{ color: 'red' }}>{errors.rating}</div>}
      </div>
      <button type="submit">등록</button>
    </form>
  );
}
ReviewForm.propTypes = {
  onAddReview: PropTypes.func.isRequired,
};

export default ReviewForm;

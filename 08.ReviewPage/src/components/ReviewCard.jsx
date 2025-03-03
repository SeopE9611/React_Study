import { useState } from 'react';
import PropTypes from 'prop-types';
import StarRating from './StarRating';

function ReviewCard({ review, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(review.title);
  const [editContent, setEditContent] = useState(review.content);
  const [editRating, setEditRating] = useState(review.rating);
  const [editImgUrl, setEditImgUrl] = useState(review.imgUrl);
  
  const handleEditSubmit = (e) => {
    e.preventDefault();
    const updatedReview = {
      ...review,
      title: editTitle,
      content: editContent,
      rating: editRating,
      imgUrl: editImgUrl,
      updatedAt: Date.now(),
    };
    onEdit(updatedReview);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <form onSubmit={handleEditSubmit} style={{ border: '1px solid #ccc', marginBottom: '1rem', padding: '1rem' }}>
        <div>
          <input 
            value={editImgUrl} 
            onChange={(e) => setEditImgUrl(e.target.value)} 
            placeholder="이미지 URL"
          />
        </div>
        <div>
          <input 
            value={editTitle} 
            onChange={(e) => setEditTitle(e.target.value)} 
            placeholder="제목"
          />
        </div>
        <div>
          <textarea 
            value={editContent} 
            onChange={(e) => setEditContent(e.target.value)} 
            placeholder="리뷰 내용"
          />
        </div>
        <div>
          <StarRating rating={editRating} setRating={setEditRating} />
        </div>
        <button type="submit">저장</button>
        <button type="button" onClick={() => setIsEditing(false)}>취소</button>
      </form>
    );
  }

  return (
    <div style={{ border: '1px solid #ccc', marginBottom: '1rem', padding: '1rem' }}>
      <img src={review.imgUrl} alt={review.title} style={{ width: '100px' }} />
      <h2>{review.title}</h2>
      <p>{review.content}</p>
      {/* 🔥 수정된 코드: <p> 내부에 <StarRating>을 직접 넣지 않음 */}
      <div>
        <p>별점:</p>
        <StarRating rating={review.rating} setRating={() => {}} />
      </div>
      <p>작성일: {new Date(review.createdAt).toLocaleString()}</p>
      {review.updatedAt !== review.createdAt && (
        <p>수정일: {new Date(review.updatedAt).toLocaleString()}</p>
      )}
      <button onClick={() => setIsEditing(true)}>수정</button>
      <button onClick={() => onDelete(review.id)}>삭제</button>
    </div>
  );
}

ReviewCard.propTypes = {
  review: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    imgUrl: PropTypes.string,
    createdAt: PropTypes.number.isRequired,
    updatedAt: PropTypes.number,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default ReviewCard;

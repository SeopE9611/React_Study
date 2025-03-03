import ReviewCard from './ReviewCard';
import PropTypes from 'prop-types';

function ReviewList({ reviews, onDelete, onEdit }) {
  return (
    <div>
      {reviews.map(review => (
        <ReviewCard 
          key={review.id} 
          review={review} 
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}
ReviewList.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default ReviewList;

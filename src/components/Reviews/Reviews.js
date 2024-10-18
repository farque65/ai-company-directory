import React, { useState } from 'react';
import './Reviews.css';

function Reviews({ aiCompanyId, reviews: initialReviews }) {
  const [reviews, setReviews] = useState(initialReviews);
  const [newReview, setNewReview] = useState({ rating: 5, comment: '' });

  const handleSubmitReview = (e) => {
    e.preventDefault();
    const updatedReviews = [...reviews, { ...newReview, id: Date.now() }];
    setReviews(updatedReviews);
    setNewReview({ rating: 5, comment: '' });
    // Here you would typically send the new review to your backend API
  };

  return (
    <div className="reviews">
      <h3>Customer Reviews</h3>
      {reviews.map(review => (
        <div key={review.id} className="review">
          <div>Rating: {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</div>
          <p>{review.comment}</p>
        </div>
      ))}
      <form onSubmit={handleSubmitReview}>
        <select
          value={newReview.rating}
          onChange={(e) => setNewReview({ ...newReview, rating: parseInt(e.target.value) })}
        >
          {[1, 2, 3, 4, 5].map(num => (
            <option key={num} value={num}>{num} Star{num !== 1 ? 's' : ''}</option>
          ))}
        </select>
        <textarea
          value={newReview.comment}
          onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
          placeholder="Write your review..."
        ></textarea>
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
}

export default Reviews;
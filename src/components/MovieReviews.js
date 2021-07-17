// Code MovieReviews Here

import React from 'react'

const MovieReviews = props => (
  <ol className='review-list'>
    {props.reviews.map((review,idx)=><li key={idx} className='review'>{review.link.url}</li>)}
  </ol>
  )

export default MovieReviews
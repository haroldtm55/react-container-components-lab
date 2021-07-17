import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'TDGwGpvn0IVd95WxLpVpvQ6UeMLRvfEV';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends Component {
  constructor() {
    super()
    this.state = {
      reviews: []
    }
  }

  componentDidMount() {
    fetch(URL)
      .then(resp => resp.json())
      .then(reviewsData => {
        // console.log(reviewsData)
        this.setState({
          reviews: reviewsData.results
        })
      })

  }

  render() {
    // console.log(this.state.reviews)
    return (
      <ol className='latest-movie-reviews'>
        {this.state.reviews.map((reviewData) => <MovieReviews key={reviewData.display_title} review={reviewData.link.url} />)}
      </ol>
    )
  }
}
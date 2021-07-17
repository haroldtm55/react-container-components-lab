import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'TDGwGpvn0IVd95WxLpVpvQ6UeMLRvfEV';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super()
    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  handleChange = (event) => this.setState({searchTerm: event.target.value })
  
  handleSubmit = (event) => {
    event.preventDefault()
    fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=${NYT_API_KEY}&query=${this.state.searchTerm}`)
    .then(resp => resp.json())
    .then(reviewsFound => {
      // console.log(reviewsFound)
      this.setState({
        reviews: reviewsFound.results
      })
    })
    this.setState({
      searchTerm: ''
    })
  }

  render() {
    // console.log(this.state.reviews)
    return (
      <div className='searchable-movie-reviews'>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={this.state.searchTerm} type='text' name='name'></input>
          <button type='submit'>Search</button>
        </form>
        
        <div className='movie-reviews'>
          <MovieReviews reviews={this.state.reviews} />
        </div>
      </div>
    )
  }
}
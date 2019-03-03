import React, { Component } from 'react';
import './Movie.css';

export default class Movie extends Component {
  render() {
    const { movie } = this.props;
    return (
      <a className="Movie" target="_blank" rel="noopener noreferrer" href={`https://www.imdb.com/title/${movie.imdbID}`}>
        <img alt={movie.Title} src={movie.Poster} />
        <div>{movie.Title}</div>
      </a>
    );
  }
}
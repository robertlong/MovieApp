import React, { Component } from 'react';
import './App.css';
import Movie from "./Movie";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
      movies: []
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ search: e.target.value });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.search === this.state.search) return;

    fetch(`http://www.omdbapi.com/?s=${this.state.search}&type=movie&apikey=${process.env.REACT_APP_OMD_API_KEY}`)
      .then(res => res.json())
      .then(json => this.setState({ movies: json.Search || [] }));
  }

  render() {
    return (
      <div className="App">
        <input className="search" placeholder="Search for movies..." type="text" onChange={this.onChange}/>
        <div className="movies">
          {this.state.movies.map(movie => <Movie key={movie.imdbID} movie={movie} />)}
        </div>
      </div>
    );
  }
}

export default App;

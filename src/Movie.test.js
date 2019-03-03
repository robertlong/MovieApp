import React from 'react';
import { render } from 'enzyme';
import Movie from './Movie';

it('Renders a Movie component', () => {
  const movie = {
    Title: "Star Wars",
    imdbID: "123",
    Poster: "http://example.com/image.png"
  };

  const el = render(<Movie movie={movie} />);
  expect(el.prop("href")).toEqual(`https://www.imdb.com/title/${movie.imdbID}`);
  expect(el.text()).toContain(movie.Title);
  expect(el.find('img').prop("src")).toEqual(movie.Poster);
});
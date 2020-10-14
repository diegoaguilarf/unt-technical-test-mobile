import React, {ReactText, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {UI, Gallery, Search} from '../components';
import {Entry, MainState} from '../types';
import Actions from '../store/actions';

const {Topbar, Select} = UI;

export interface MoviesProps {}

const Movies: React.SFC<MoviesProps> = () => {
  const sortOptions = [
    {
      label: 'Ascending sort',
      value: 'ascending',
    },
    {
      label: 'Descending sort',
      value: 'descending',
    },
  ];

  const dispatch = useDispatch();
  const movies = useSelector<MainState, Entry[] | null | undefined>(
    (state) => state.filteredMovies,
  );

  useEffect(() => {
    dispatch(Actions.getMoviesOfEntries());
  }, []);

  const sortBy = (option: ReactText | string) => {
    if (option == 'ascending') {
      dispatch(Actions.ascendingSortMoviesBy('title'));
    } else {
      dispatch(Actions.descendingSortMoviesBy('title'));
    }
  };

  const filterBySearchTerm = (value: string) => {
    if (value == '') {
      dispatch(Actions.searchMovies(''));
    } else if (value.length > 3) {
      dispatch(Actions.searchMovies(value));
    }
  };

  return (
    <>
      <Topbar title="Popular Movies" />
      <Search onChange={(value) => filterBySearchTerm(value)} />
      <Select options={sortOptions} onChange={(option) => sortBy(option)} />
      {movies && <Gallery items={movies.slice(0, 21)} />}
    </>
  );
};

export default Movies;

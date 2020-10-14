import React, {useEffect, useState, ReactText} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {UI, Gallery, Search} from '../components';
import {Entry, MainState} from '../types';
import Actions from '../store/actions';

const {Topbar, Select} = UI;

const Series: React.SFC = () => {
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
  const series = useSelector<MainState, Entry[] | null | undefined>(
    (state) => state.filteredSeries,
  );

  useEffect(() => {
    dispatch(Actions.getSeriesOfEntries());
  }, []);

  const sortBy = (option: ReactText | string) => {
    if (option == 'ascending') {
      dispatch(Actions.ascendingSortSeriesBy("title"));
    } else {
      dispatch(Actions.descendingSortSeriesBy("title"));
    }
  };

  const filterBySearchTerm = (value: string) => {
    if (value == "") {
      dispatch(Actions.searchSeries(''));
    } else if (value.length > 3) {
      dispatch(Actions.searchSeries(value));
    }
  };

  return (
    <>
      <Topbar title="Popular Series" />
      <Search onChange={(value) => filterBySearchTerm(value)} />
      <Select options={sortOptions} onChange={(option) => sortBy(option)} />
      {series && <Gallery items={series.slice(0, 21)} />}
    </>
  );
};

export default Series;

import { ReactText } from "react"
import { Action } from 'redux';
import { ImageSourcePropType } from "react-native";


interface EntryImages {
    "Poster Art": {
        url: string,
        width: number,
        height: number
    }
}

export interface Entry {
    title: string,
    description?: string,
    programType?: string,
    images?: EntryImages,
    releaseYear?: number,
    thumbnail?: ImageSourcePropType
}

export interface pickerOption {
    label: string,
    value: ReactText
}

export interface ResponseError {
    code: number,
    message: string
}

export interface MainState {
    isLoading: boolean,
    entries?: Entry[] | null,
    series?: Entry[] | null,
    filteredSeries?: Entry[] | null,
    movies?: Entry[] | null,
    filteredMovies?: Entry[] | null,
}

export enum MainActionsTypes {
    GET_ENTRIES_REQUESTED = 'GET_ENTRIES_REQUESTED',
    GET_ENTRIES_SUCCEEDED = 'GET_ENTRIES_SUCCEEDED',
    GET_ENTRIES_FAILED = 'GET_ENTRIES_FAILED',
    GET_SERIES_OF_ENTRIES = 'GET_SERIES_OF_ENTRIES',
    GET_MOVIES_OF_ENTRIES = 'GET_MOVIES_OF_ENTRIES',
    SEARCH_SERIES = 'SEARCH_SERIES',
    ASCENDING_SORT_SERIES_BY = 'ASCENDING_SORT_SERIES_BY',
    DESCENDING_SORT_SERIES_BY = 'DESCENDING_SORT_SERIES_BY',
    SEARCH_MOVIES = 'SEARCH_MOVIES',
    ASCENDING_SORT_MOVIES_BY = 'ASCENDING_SORT_MOVIES_BY',
    DESCENDING_SORT_MOVIES_BY = 'DESCENDING_SORT_MOVIES_BY'
}

export interface GetEntriesRequestedAction extends Action {
    type: MainActionsTypes.GET_ENTRIES_REQUESTED;
}

export interface GetEntriesSucceededAction extends Action {
    type: MainActionsTypes.GET_ENTRIES_SUCCEEDED;
    payload: Entry[];
}

export interface GetEntriesFailedAction extends Action {
    type: MainActionsTypes.GET_ENTRIES_FAILED;
    
}

export interface GetSeriesOfEntriesAction extends Action {
    type: MainActionsTypes.GET_SERIES_OF_ENTRIES;
}

export interface GetMoviessOfEntriesAction extends Action {
    type: MainActionsTypes.GET_MOVIES_OF_ENTRIES;
}

export interface SearchSeriesAction extends Action {
    type: MainActionsTypes.SEARCH_SERIES;
    payload: string;
}

export interface AscendingSortSeriesByAction extends Action {
    type: MainActionsTypes.ASCENDING_SORT_SERIES_BY;
    payload: "title";
}

export interface DescendingSortSeriesByAction extends Action {
    type: MainActionsTypes.DESCENDING_SORT_SERIES_BY;
    payload: "title";
}

export interface SearchMoviesAction extends Action {
    type: MainActionsTypes.SEARCH_MOVIES;
    payload: string;
}

export interface AscendingSortMoviesByAction extends Action {
    type: MainActionsTypes.ASCENDING_SORT_MOVIES_BY;
    payload: "title";
}

export interface DescendingSortMoviesByAction extends Action {
    type: MainActionsTypes.DESCENDING_SORT_MOVIES_BY;
    payload: "title";
}

export type MainActions = GetEntriesRequestedAction | 
                            GetEntriesSucceededAction | 
                            GetEntriesFailedAction | 
                            GetSeriesOfEntriesAction | 
                            GetMoviessOfEntriesAction |
                            SearchSeriesAction |
                            AscendingSortSeriesByAction |
                            DescendingSortSeriesByAction |
                            SearchMoviesAction |
                            AscendingSortMoviesByAction |
                            DescendingSortMoviesByAction;
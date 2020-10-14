import { Reducer } from "redux"
import { MainState, MainActions, MainActionsTypes } from "../types"
const initialState = {
    isLoading: false,
    entries: null,
    series: null,
    filteredSeries: null,
    movies: null,
    filteredMovies: null,
}

const mainReducers: Reducer<MainState, MainActions> = (state = initialState, action): MainState => {
    let series, movies;
    switch (action.type) {
        case MainActionsTypes.GET_ENTRIES_REQUESTED:
            return { ...state, isLoading: true }
        case MainActionsTypes.GET_ENTRIES_SUCCEEDED:
            return { ...state, entries: action.payload, isLoading: false }
        case MainActionsTypes.GET_ENTRIES_FAILED:
            return { ...state, isLoading: false }
        case MainActionsTypes.GET_SERIES_OF_ENTRIES:
            series = state.entries ? state.entries.filter(item => item.programType == "series") : null
            return { ...state, series, filteredSeries: series };
        case MainActionsTypes.GET_MOVIES_OF_ENTRIES:
            movies = state.entries ? state.entries.filter(item => item.programType == "movie") : null
            return { ...state, movies, filteredMovies: movies };
        case MainActionsTypes.SEARCH_SERIES:
            series = state.series ? state.series.filter(item => item.title.toLowerCase().includes(action.payload.toLowerCase())) : null
            return { ...state, filteredSeries: series }
        case MainActionsTypes.ASCENDING_SORT_SERIES_BY:
            if (state.filteredSeries) {
                series = [...state.filteredSeries].sort((a, b) => a[action.payload].toLowerCase().localeCompare(b[action.payload].toLowerCase()));
                return { ...state, filteredSeries: series }
            }
            return state
        case MainActionsTypes.DESCENDING_SORT_SERIES_BY:
            if (state.filteredSeries) {
                series = [...state.filteredSeries].sort((a, b) => b[action.payload].toLowerCase().localeCompare(a[action.payload].toLowerCase()));
                return { ...state, filteredSeries: series }
            }
            return state
        case MainActionsTypes.SEARCH_MOVIES:
            movies = state.movies ? state.movies.filter(item => item.title.toLowerCase().includes(action.payload.toLowerCase())) : null
            return { ...state, filteredMovies: movies }
        case MainActionsTypes.ASCENDING_SORT_MOVIES_BY:
            if (state.filteredMovies) {
                movies = [...state.filteredMovies].sort((a, b) => a[action.payload].toLowerCase().localeCompare(b[action.payload].toLowerCase()));
                return { ...state, filteredMovies: movies }
            }
            return state
        case MainActionsTypes.DESCENDING_SORT_MOVIES_BY:
            if (state.filteredMovies) {
                movies = [...state.filteredMovies].sort((a, b) => b[action.payload].toLowerCase().localeCompare(a[action.payload].toLowerCase()));
                return { ...state, filteredMovies: movies }
            }
            return state
        default:
            return state
    }
}

export default mainReducers;
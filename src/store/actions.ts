import { MainActionsTypes, Entry, ResponseError } from "../types";

export const getEntriesRequested = () => ({
    type: MainActionsTypes.GET_ENTRIES_REQUESTED
})

export const getEntriesSucceeded = (payload: Entry[]) => ({
    type: MainActionsTypes.GET_ENTRIES_SUCCEEDED,
    payload
})

export const getEntriesFailed = (payload: ResponseError) => ({
    type: MainActionsTypes.GET_ENTRIES_FAILED,
    payload
})

export const getSeriesOfEntries = () => ({
    type: MainActionsTypes.GET_SERIES_OF_ENTRIES,
})

export const getMoviesOfEntries = () => ({
    type: MainActionsTypes.GET_MOVIES_OF_ENTRIES,
})

export const searchSeries = (payload: string) => ({
    type: MainActionsTypes.SEARCH_SERIES,
    payload
})
export const ascendingSortSeriesBy = (payload: string) => ({
    type: MainActionsTypes.ASCENDING_SORT_SERIES_BY,
    payload
})
export const descendingSortSeriesBy = (payload: string) => ({
    type: MainActionsTypes.DESCENDING_SORT_SERIES_BY,
    payload
})

export const searchMovies = (payload: string) => ({
    type: MainActionsTypes.SEARCH_MOVIES,
    payload
})
export const ascendingSortMoviesBy = (payload: string) => ({
    type: MainActionsTypes.ASCENDING_SORT_MOVIES_BY,
    payload
})
export const descendingSortMoviesBy = (payload: string) => ({
    type: MainActionsTypes.DESCENDING_SORT_MOVIES_BY,
    payload
})

export default {
    getEntriesRequested,
    getEntriesSucceeded,
    getEntriesFailed,
    getSeriesOfEntries,
    getMoviesOfEntries,
    searchSeries,
    ascendingSortSeriesBy,
    descendingSortSeriesBy,
    searchMovies,
    ascendingSortMoviesBy,
    descendingSortMoviesBy
}
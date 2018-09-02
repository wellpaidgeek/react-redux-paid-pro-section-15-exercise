import axios from 'axios';
import { put, call, select } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { SEARCH_PERFORMED, searchSuccess, searchError } from '../actions/search';

throw new Error('Add your giphy api key below and delete this');
const apiKey = 'Add your giphy api key here';

const selectSearchState = (state) => state.search;

function* doSearch({ searchTerm }) {
    const { currentOffset } = yield select(selectSearchState);
    try {
        const searchResults = yield call(
            axios.get,
            'https://api.giphy.com/v1/gifs/search',
            {
                params: {
                    apiKey,
                    q: searchTerm,
                    limit: 50,
                    offset: currentOffset,
                },
            }
        );
        yield put(searchSuccess(searchResults.data.data));
    } catch (e) {
        yield put(searchError());
    }
}

export default function* () {
    yield takeLatest(SEARCH_PERFORMED, doSearch);
}
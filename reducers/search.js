import { SEARCH_SUCCESS } from '../actions/search';

const initialState = {
    results: [],
    currentOffset: 0,
};

function searchResultTransformer (rawResult) {
    const { images } = rawResult;
    return {
        thumbnail: images.fixed_height_small_still.url,
        full: images.original.url,
    };
}

export default (state, action) => {
    if (state === undefined) {
        return initialState;
    }
    switch (action.type) {
        case SEARCH_SUCCESS:
            return {
                ...state,
                results: action.results.map(searchResultTransformer),
            };
        default:
            return state;
    }
}
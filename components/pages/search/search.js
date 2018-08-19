import React from 'react';
import SearchForm from '../../search-form/search-form.container';
import SearchResults from '../../search-results/search-results.container';
import InfiniteScroll from '../../infinite-scroll/infinite-scroll';

export default () => {
    return (
        <div>
            <SearchForm />
            <InfiniteScroll isLoading={false} onTrigger={ () => console.log('InfiniteScroll triggered') }>
                <SearchResults />
            </InfiniteScroll>
        </div>
    );
}
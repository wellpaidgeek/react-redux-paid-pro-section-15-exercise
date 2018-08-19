import React from 'react';
import PropTypes from 'prop-types';

export default class InfiniteScroll extends React.Component {

    constructor (...args) {
        super(...args);
        this.container = null;
        this.scrollListener = this.scrollListener.bind(this);
    }

    componentDidMount () {
        document.addEventListener('scroll', this.scrollListener);
    }

    componentWillUnmount () {
        document.removeEventListener('scroll', this.scrollListener);
    }

    scrollListener () {
        const { isLoading, onTrigger } = this.props;
        const viewportHeight = document.documentElement.clientHeight;
        const { bottom } = this.container.getBoundingClientRect();
        if (!isLoading && (bottom <= viewportHeight)) {
            onTrigger();
        }
    }

    render () {
        const { children, isLoading } = this.props;
        return (
            <div ref={(e) => { this.container = e}}>
                {children}
                { isLoading && <div>Loading...</div> }
            </div>
        );
    }
}

InfiniteScroll.propTypes = {
    children: PropTypes.element.isRequired,
    isLoading: PropTypes.bool.isRequired,
    onTrigger: PropTypes.func.isRequired,
};
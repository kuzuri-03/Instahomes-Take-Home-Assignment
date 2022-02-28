import React, { Component } from 'react';
import { SearchAction, View } from './searchIndex';
import { connect } from 'react-redux';
import * as types from '../store/actions';

class Parent extends Component {
    componentDidMount(props) {
        this.props.dispatch()
    }
    render() {
        return (
            <>
                <SearchAction />
                <View />
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        searchedData: state?.searchedData
    }
}
const mapDispatchToProps = dispatch => {
    return {
        dispatch: () => { dispatch(types.getSearchDataRequest('')) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Parent);
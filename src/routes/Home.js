import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Home extends Component {
    render() {
        return (<h1> Home</h1>);
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default Home;
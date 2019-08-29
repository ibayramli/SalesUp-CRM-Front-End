import PropTypes from 'prop-types';
import React from 'react';
import DashboardLayout from './DashboardLayout';
import HomeContent from './MainDashboardContents/HomeContent';


export default class Dashboard extends React.Component {
    constructor() {
        super();
        this.state = {
            currentLayout: "Home Content" 
        };
    }

    setLayoutState(layoutState) {
        this.setState({currentLayout: layoutState});
    }

    render() {
        const { currentLayout } = this.state;

        return (
            <DashboardLayout upSender={this.setLayoutState.bind(this)} mainContent={layoutStates[currentLayout]}/>
        );
    }
}

const layoutStates = {
    "Home Content": <HomeContent />,
}
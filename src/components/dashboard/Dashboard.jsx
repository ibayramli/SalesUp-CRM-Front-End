import PropTypes from 'prop-types';
import React from 'react';
import DashboardLayout from './DashboardLayout';
import HomeContent from './MainDashboardContents/HomeContent';
import SalesLeads from './MainDashboardContents/SalesLeads/SalesLeads';

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
            <DashboardLayout 
                upSender={this.setLayoutState.bind(this)} 
                mainContent={<SalesLeads companyName="Twilio Inc." startDate="2016-06-27" endDate="2016-01-08" stage="signup" service={4} />} />
        );
    }
}

const layoutStates = {
    "Home Content": <HomeContent />,
}
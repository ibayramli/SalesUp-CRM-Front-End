import PropTypes from 'prop-types';
import React from 'react';
import SalesLeads from './MainDashboardContents/SalesLeads/SalesLeads'
import DashboardLayout from './DashboardLayout';
import HomeContent from './MainDashboardContents/HomeContent';
import CustomerTable from './MainDashboardContents/CustomerRecords/CustomerTable';
import LeadTable from './MainDashboardContents/CustomerRecords/LeadTable';
import Stats from './MainDashboardContents/Stats/Stats'


export default class Dashboard extends React.Component {
    constructor() {
        super();
        this.state = {
            currentLayout: "Home" 
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
                mainContent={layoutStates[currentLayout]} 
            />
        );
    }
}

const layoutStates = {
    "Home": <HomeContent />,
    "Sales Leads": <SalesLeads />,
    "Customer Records": <CustomerTable />,
    "Lead Records": <LeadTable />, 
    "Stats": <Stats />,
}
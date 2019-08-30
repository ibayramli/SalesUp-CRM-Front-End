import PropTypes from 'prop-types';
import React from 'react';
import axios from 'axios';
import SectorPieChart from './Charts/SectorPieChart';


const token = localStorage.azcloud;

export default class Stats extends React.Component {
    constructor() {
        super();
        this.state = {
            acquisitionData: [],
            customerCountData: [],
            industryData: [],
            sectorData: [],
            percentageSectorData: [],
        }
    }

    async getAcquistionData() {
        const { data } = await axios({
            method: 'get',
            url: 'https://azcloud-server.herokuapp.com/api/acquisition',
            headers: {
                'Authorization': 'Token '+ token
            }
        })
        .then(function (response) {
            return (response);
        })
        .catch(function (error) {
            return ([]);
        })
    
        return data;
    }

    async getCustomerCountData() {
        const { data } = await axios({
            method: 'get',
            url: 'https://azcloud-server.herokuapp.com/api/count',
            headers: {
                'Authorization': 'Token '+ token
            }
        })
        .then(function (response) {
            return (response);
        })
        .catch(function (error) {
            return ([]);
        })
        return data;
    }

    async getIndustryData() {
        const { data } = await axios({
            method: 'get',
            url: 'https://azcloud-server.herokuapp.com/api/get-industry',
            headers: {
                'Authorization': 'Token '+ token
            }
        })
        .then(function (response) {
            return (response);
        })
        .catch(function (error) {
            return ([]);
        })
        return data;
    }

    async getSectorData() {
        const { data } = await axios({
            method: 'get',
            url: 'https://azcloud-server.herokuapp.com/api/get-sector',
            headers: {
                'Authorization': 'Token '+ token
            }
        })
        .then(function (response) {
            return (response);
        })
        .catch(function (error) {
            return ([]);
        })
        return data;
    }

    async getPercentageSectorData() {
        const { data } = await axios({
            method: 'get',
            url: 'https://azcloud-server.herokuapp.com/api/percentage-sector',
            headers: {
                'Authorization': 'Token '+ token
            }
        })
        .then(function (response) {
            return (response);
        })
        .catch(function (error) {
            return ([]);
        })
        return data;
    }

    async componentDidMount() {
        const acquisitionData = await this.getAcquistionData();
        const customerCountData = await this.getCustomerCountData();
        const industryData = await this.getIndustryData();
        const sectorData = await this.getSectorData();
        const percentageSectorData = await this.getPercentageSectorData();
        
        this.setState({
            acquisitionData: acquisitionData,
            customerCountData: customerCountData,
            industryData: industryData,
            sectorData: sectorData,
            percentageSectorData: percentageSectorData,
        });
    }

    render() {
        console.log(this.state)
        const { acquisitionData } = this.state;

        return (
            <div>
                In Progress ... 
            </div>
        );
    }
}
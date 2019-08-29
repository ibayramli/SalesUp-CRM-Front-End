import PropTypes from 'prop-types';
import React from 'react';
import { Container, Card } from 'semantic-ui-react';

export default class CustomerTable extends React.Component {
    constructor() {
        super();
        this.state = { customerCredentials: [] };
    }
    async getCustomerData() {
        const { data } = await axios({
            method: 'get',
            url: 'https://azcloud-server.herokuapp.com/api/list-sales',
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
        const data = await this.getCustomerData();
        this.setState({customerCredentials: data});
    }

    render() {
        return("")
    }
}

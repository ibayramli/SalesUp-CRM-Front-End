import PropTypes from 'prop-types';
import React from 'react';
import { Container, Card, Table, Menu, Icon, Segment } from 'semantic-ui-react';
import axios from 'axios';

const token = localStorage.azcloud;

export default class CustomerTable extends React.Component {
    constructor() {
        super();
        this.state = { customerCredentials: [] };
    }

    createTable(data) {
        return (
            <Container>
            <Table celled stackable collapsing>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell width={1.5}>Company Name</Table.HeaderCell>
                <Table.HeaderCell>Company Legal Name</Table.HeaderCell>
                <Table.HeaderCell>Industry</Table.HeaderCell>
                <Table.HeaderCell>Public/Private</Table.HeaderCell>
                <Table.HeaderCell>City</Table.HeaderCell>
                <Table.HeaderCell>Country</Table.HeaderCell>
                <Table.HeaderCell>Billing Address</Table.HeaderCell>
                <Table.HeaderCell>Acquistion Channel</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
        
            <Table.Body>
                {
                    data.map( customer => {
                        return(
                            <Table.Row>
                                <Table.Cell>{ customer.company_name }</Table.Cell>
                                <Table.Cell>{ customer.company_legal_name }</Table.Cell>
                                <Table.Cell>{ customer.industry }</Table.Cell>
                                <Table.Cell>{ customer.is_private ? 'Private' : 'Public' }</Table.Cell>
                                <Table.Cell>{ customer.city }</Table.Cell>
                                <Table.Cell>{ customer.country }</Table.Cell>
                                <Table.Cell>{ customer.billing_address}</Table.Cell>
                                <Table.Cell>{ customer.acquisition_channel}</Table.Cell>
                            </Table.Row>
                        );
                    })
                }
            </Table.Body>
          </Table>
          </Container>
        );
    }

    async getCustomerData() {
        const { data } = await axios({
            method: 'get',
            url: 'https://azcloud-server.herokuapp.com/api/get-customers',
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
        const { customerCredentials } = this.state;

        return(
            <div>
                {
                    this.createTable(customerCredentials)
                }
            </div>
        );
    }
}

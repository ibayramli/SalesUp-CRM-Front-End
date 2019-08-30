import PropTypes from 'prop-types';
import React from 'react';
import { Container, Card, Table, Menu, Icon, Segment } from 'semantic-ui-react';
import axios from 'axios';

const token = localStorage.azcloud;

export default class LeadTable extends React.Component {
    constructor() {
        super();
        this.state = { leadCredentials: [] };
    }

    createTable(data) {
        return (
            <Container>
            <Table celled stackable collapsing>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Lead Name</Table.HeaderCell>
                <Table.HeaderCell>Stage</Table.HeaderCell>
                <Table.HeaderCell>Service</Table.HeaderCell>
                <Table.HeaderCell>Start Date</Table.HeaderCell>
                <Table.HeaderCell>EndDate</Table.HeaderCell>
                <Table.HeaderCell>Disk Space</Table.HeaderCell>
                <Table.HeaderCell>Disk Type</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
        
            <Table.Body>
                {
                    data.map( lead => {
                        
                        return(
                            <Table.Row>
                                <Table.Cell>{ lead.name }</Table.Cell>
                                <Table.Cell positive={lead.stage === 'signup'} negative={lead.stage === 'rejection'} warning={lead.stage === 'postpone'} >{ lead.stage}</Table.Cell>
                                <Table.Cell>{ options[lead.service].text }</Table.Cell>
                                <Table.Cell>{ lead.start_date }</Table.Cell>
                                <Table.Cell>{ lead.end_date }</Table.Cell>
                                <Table.Cell>{ lead.disc_space }</Table.Cell>
                                <Table.Cell>{ lead.disc_type}</Table.Cell>
                            </Table.Row>
                        );
                    })
                }
            </Table.Body> }
          </Table>
          </Container>
        );
    }

    async getLeadData() {
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
        const data = await this.getLeadData();
        this.setState({leadCredentials: data});
    }

    render() {
        const { leadCredentials } = this.state;

        return(
            <div>
                {
                    this.createTable(leadCredentials)
                }
            </div>
        );
    }
}

const options = [
    { key: 'vs1', text: 'VS1', value: 0 },
    { key: 'vs2', text: 'VS2', value: 1 },
    { key: 'vs3', text: 'VS3', value: 2 },
    { key: 'vs4', text: 'VS4', value: 3 },
    { key: 'vs5', text: 'VS5', value: 4 },
    { key: 'vs6', text: 'VS6', value: 5 },
    { key: 'vs7', text: 'VS7', value: 6 },
    { key: 'vs8', text: 'VS8', value: 7 },
    { key: 'vs9', text: 'VS9', value: 8 },
    { key: 'vs10', text: 'VS10', value: 9 },
    { key: 'vs11', text: 'VS11', value: 10 },
    { key: 'vs12', text: 'VS12', value: 11 },
    { key: 'vs13', text: 'VS13', value: 12 },
    { key: 'vs14', text: 'VS14', value: 13 },
    { key: 'vs15', text: 'VS15', value: 14 },
]

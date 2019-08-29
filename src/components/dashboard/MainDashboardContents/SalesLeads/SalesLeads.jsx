import PropTypes from 'prop-types';
import React from 'react';
import { Container, Card } from 'semantic-ui-react';
import Lead from './Lead';
import axios from 'axios';
import { async } from 'q';


const token = localStorage.azcloud;

export default class SalesLeads extends React.Component {
    constructor() {
        super()
        this.state = {
            salesLeads: [],
        }
    }

    async getLeadsData() {
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

    getLeadCollection(salesLeads) {
        return (
                <Card.Group>
                {
                salesLeads.map( 
                    (salesLead) => {
                    const { 
                        customer,
                        disc_space,
                        disc_type,
                        end_date,
                        id,
                        name,
                        service,
                        stage,
                        start_date,
                 } = salesLead;
             
                return (
                        <Lead 
                            companyName={customer.company_name} 
                            startDate={start_date}
                            endDate={end_date}
                            stage={stage}
                            projectName={name}
                            isPrivate={customer.is_private}
                            diskType={disc_type}
                            diskSpace={disc_space}
                            purchasedService={service}
                            industry={customer.industry}
                        />
                );
                })
            }
            }
            </Card.Group>
        );
    }

    async componentDidMount() {
        const data = await this.getLeadsData();
        this.setState({salesLeads: data});
    }

    render() {
        const { salesLeads } = this.state;

        return (
            <div>
                {this.getLeadCollection(salesLeads)}
            </div>
        );
    }
}
import React from 'react';
import axios from 'axios';
import { Form, Grid, Header, Segment, Image} from 'semantic-ui-react'
import { Redirect } from 'react-router-dom';
import SuccessMessage from './SuccessMessage';
import ErrorMessage from './ErrorMessage';

export default class LoginForm extends React.Component {
    constructor() {
        super();
        this.state = {
            loginMessage: false,
            redirect: false,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        const body = {
            'email' :  event.target['email'].value,
            'password' : event.target['password'].value
        };

        axios({
            method: 'post',
            url: 'https://azcloud-server.herokuapp.com/auth/login',
            data: body
        })
        .then(function (response) {
            this.setState({ loginMessage: <SuccessMessage /> });
            localStorage.setItem('azcloud', response.data.token);
            this.setState({ redirect: true })
        }.bind(this))
        .catch(function (error) {
            this.setState({ loginMessage: <ErrorMessage /> });
        }.bind(this));
    }

    render() {
        const { loginMessage, redirect } = this.state;

        if (redirect) return <Redirect to="/dashboard"/>;

        return (
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450}}>
                  <Header as='h2' style={{color: "black"}} textAlign='center'>
                    <Image src='/logo.png' /> Login to your account
                  </Header>
                  <Form size='large' onSubmit={this.handleSubmit}>
                    <Segment stacked>
                      <Form.Input 
                        fluid 
                        required
                        name="email"
                        icon='user' 
                        iconPosition='left' 
                        placeholder='Email address'
                        />
                      <Form.Input
                        fluid
                        required
                        name="password"
                        icon='lock'
                        iconPosition='left'
                        placeholder='Password'
                        type='password'
                      />
                      <Form.Button color='black' fluid size='large'>
                        Login
                      </Form.Button>
                    </Segment>
                  </Form>
                  { loginMessage }
                </Grid.Column>
            </Grid>
        );
    }
}




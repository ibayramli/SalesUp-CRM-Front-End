import PropTypes from 'prop-types';
import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';


export default class VerticalSidebarContent extends React.Component {
    constructor() {
        super();
        this.passMenuItemKeyUp = this.passMenuItemKeyUp.bind(this);
    }

    passMenuItemKeyUp = (event) => this.props.upSender(event.target.innerText); 

    render() {
        return (
            <React.Fragment>
                <Menu.Item as='a' onClick={this.passMenuItemKeyUp}>
                    <Icon name='handshake' />
                    Sales Leads
                </Menu.Item>
                <Menu.Item as='a'>
                    <Icon name='gamepad' />
                    Games
                </Menu.Item>
                <Menu.Item as='a'>
                    <Icon name='camera' />
                    Channels
                </Menu.Item>
            </React.Fragment>
        );
    }
}
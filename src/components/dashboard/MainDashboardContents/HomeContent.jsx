import PropTypes from 'prop-types';
import React from 'react';
import { Segment, Header, Image } from 'semantic-ui-react';


export default class HomeContent extends React.Component {
    render() {
        return (
            <div style={{minHeight: '93vh'}}>
                <Segment basic>
                    <Header as='h3'>Application Content</Header>
                    <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                </Segment>
            </div>
        );
    }
}
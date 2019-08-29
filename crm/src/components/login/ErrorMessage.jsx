import React from 'react';
import { Message } from 'semantic-ui-react';

export default class SuccessMessage extends React.Component {
    render () {
        return (
            <Message
                error
                header='Denied Access'
                content="The email and password pair you provided does not match our records"
            />
        );
    }
}
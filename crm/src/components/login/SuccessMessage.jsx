import React from 'react';
import { Message } from 'semantic-ui-react';

export default class SuccessMessage extends React.Component {
    render () {
        return (
            <Message
                success
                header='Form Completed'
                content="You will be redirected soon"
            />
        );
    }
}
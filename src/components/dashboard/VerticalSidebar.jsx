import PropTypes from 'prop-types';
import React from 'react';
import { Menu, Sidebar} from 'semantic-ui-react';
import './DashboardLayout.css'

export default class VerticalSidebar extends React.Component {
  render() {
    const { animation, direction, visible } = this.props;

    return (
        <Sidebar
          style={{color: '78745E'}}
          as={Menu}
          animation={animation}
          direction={direction}
          icon='labeled'
          inverted
          vertical
          visible={visible}
          width='wide'
        >
          {this.props.children}
        </Sidebar>
    );
  }
}

VerticalSidebar.propTypes = {
  animation: PropTypes.string,
  direction: PropTypes.string,
  visible: PropTypes.bool,
}

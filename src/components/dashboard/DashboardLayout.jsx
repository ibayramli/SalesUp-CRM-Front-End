import PropTypes from 'prop-types'
import React from 'react';
import { Segment, Sidebar, Container, Sticky, } from 'semantic-ui-react';
import VerticalSidebar from './VerticalSidebar';
import VerticalSidebarContent from './VerticalSidebarContent';
import Navigation from './Navigation';
import './DashboardLayout.css'; 


export default class DashboardLayout extends React.Component {
    state = {
      visible: true,
    }
  
    handleAnimationChange = () => () => {
      this.setState((prevState) => ({ visible: !prevState.visible }))
    }

    passLayoutTypeUp = (layoutType) => this.props.upSender(layoutType);

    render() {
      const { visible } = this.state;
      const { mainContent } = this.props;
  
      return (
        <div>
          <Navigation handleAnimationClick={this.handleAnimationChange.bind(this)}/>
          <Sidebar.Pushable as={Segment}>
            <VerticalSidebar
              animation="slide out"
              direction="left"
              visible={visible}
            >
                {<VerticalSidebarContent upSender={this.passLayoutTypeUp.bind(this)} />}
            </VerticalSidebar>
            <Sidebar.Pusher>
                <div style={{minHeight: '93vh'}}>
                    <br />
                    <Container>
                        {mainContent}
                    </Container>
                </div>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </div>
      )
    }
  }
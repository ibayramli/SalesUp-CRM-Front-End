import React from 'react';
import { Menu, Segment, Dropdown, Icon } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';

export default class Navigation extends React.Component {
  constructor() {
    super();
    this.state = { activeItem: 'home', redirectLink: "", };
    this.handleRedirect = this.handleRedirect.bind(this);
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
  handleAnimationClick = () => {
    this.props.handleAnimationClick()();
  }

  handleRedirect = (link) => this.setState({ redirectLink: link });

  render() {
    const { activeItem, redirectLink } = this.state;

    if (redirectLink) return <Redirect to={redirectLink} />;
    
    return ( 
        <Segment inverted >
          <Menu inverted pointing secondary stackable>
            <Menu.Item
              icon="list layout big"
              onClick={this.handleAnimationClick.bind(this)}
            />
            <Menu.Item
              name='messages'
              active={activeItem === 'messages'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='friends'
              active={activeItem === 'friends'}
              onClick={this.handleItemClick}
            />
            <Menu.Menu position="right" >
              <Dropdown item text='Language' active={false} >
                <Dropdown.Menu>
                  <Dropdown.Item>Azerbaijani</Dropdown.Item>
                  <Dropdown.Item>English</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Menu.Item>
                  <Icon name="user circle" size="large" link="/" onClick={this.handleRedirect}/>
              </Menu.Item>
            </Menu.Menu>
          </Menu>
        </Segment> 
    )
  }
}
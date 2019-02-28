import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Menu, Dropdown, Icon, Image, Grid, GridColumn, List, Input, Button } from 'semantic-ui-react';

class Murphys extends React.Component {
  render() {
    return (
        <Menu borderless className="topmenu">
          <Container>
            <Image left src='http://murphyshawaii.com/media/2014/04/murphyshawaii.png'/>
            <Menu.Item position="right"><Icon name="Home"/></Menu.Item>
            <Dropdown item text="About Us">
              <Dropdown.Menu>
                <Dropdown.Item>Getting Here/Parking</Dropdown.Item>
                <Dropdown.Item>Catering/Private Events</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item fitted><item text="St. Patrick's Day"/></Menu.Item>
            <Menu.Item fitted><Icon name="user"/></Menu.Item>
            <Dropdown item text="MY CART 0" icon="shop">
              <Dropdown.Menu>
                <Dropdown.Item>My cart is currently empty.</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Container>
        </Menu>
    )
  }
}
ReactDOM.render(<Murphys/>, document.getElementById('root'));
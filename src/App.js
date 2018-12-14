import React, { Component } from 'react';
import Navb from './navi';
import Cardlist from './cardlist';
import { Row } from 'react-bootstrap'

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navb />
        <br/>
        <Row style={{paddingLeft:'10px'}}>
          <Cardlist/>
        </Row>
      </div>
    );
  }
}

export default App;

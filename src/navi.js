import React,{ Component } from 'react';

import  Cardlist  from './cardlist';
import Login from './login';

import { BrowserRouter as Router ,Switch, Route, Link } from 'react-router-dom';
import {Nav, Navbar, NavItem, Modal} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';


class Navb extends Component {
    constructor(){
        super();
        this.state={
            show: false
        }
    }

    handleClose =() => {
        this.setState({ show: false });
      }
    
      handleShow=()=> {
        this.setState({ show: true });
      }

        render(){
            return(
                <Router>
                <div>
                
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                         <a href="./">TheShop</a>
                        </Navbar.Brand>
                    </Navbar.Header>

                    <Nav pullRight>
                        <NavItem>Sell</NavItem>
                        <NavItem><Link to={'/cardlist'}>Shop</Link></NavItem>
                        <NavItem>Search &nbsp; <FontAwesome name='search' /></NavItem>
                        <NavItem onClick={this.handleShow}>LOGIN &nbsp;  <FontAwesome name='sign-in' /></NavItem>
                            
                    </Nav>
                </Navbar>


                <Switch>
                    
                    <Route exact path='/cardlist' component={Cardlist}/>
                    
                </Switch>
                  

                <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Sign In</Modal.Title>
                    <Login/>
                </Modal.Header>
                <Modal.Body></Modal.Body>
                </Modal>
                  
                </div>
                </Router>
            );
        }
} export default Navb;
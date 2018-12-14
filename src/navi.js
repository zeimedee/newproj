import React,{ Component } from 'react';
import {Nav, Navbar, NavItem} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';


class Navb extends Component {
        render(){
            return(
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                         TheShop
                        </Navbar.Brand>
                    </Navbar.Header>

                    <Nav pullRight>
                        <NavItem>Sell</NavItem>
                        <NavItem>Shop</NavItem>
                        <NavItem>Search &nbsp; <FontAwesome name='search' /></NavItem>
                        <NavItem>LOGIN &nbsp;<FontAwesome name='sign-in' /></NavItem>
                            
                    </Nav>
                </Navbar>
            );
        }
} export default Navb;
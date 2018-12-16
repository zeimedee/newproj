import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Login from './login';

class Popup extends Component {
    constructor(){
        super();

        this.state = {
            show : false
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
            <div>
                

            <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
            Launch demo modal
            </Button>

            <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Sign In</Modal.Title>
                <Login/>
            </Modal.Header>
            <Modal.Body></Modal.Body>
            </Modal>
            </div>
        );
    }
}export default Popup;
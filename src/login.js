import React, {Component} from 'react';
import {Button, Form, FormGroup, FormControl,ControlLabel} from 'react-bootstrap';

class Login extends Component{
    constructor(){
        super();
        this.handleChange = this.handleChange.bind(this);
        //this.handlePass = this.handlePass.bind(this);
        this.handleClick = this.handleClick.bind(this);
    
        this.state = {
            value: '',
            value1: '',
            isloading: false
        }
    }


    handleChange(e){
        this.setState({value: e.target.value});
    }
    
    handlePass = (e) => {
        this.setState({value1: e.target.value});
    }
    

    getEmailstate(){
        const mail = this.state.value;
        if(mail.includes('@')) return 'success';
        else if(mail.length > 1 )return 'warning';
        return null;
    }

    getValidationState(){
        const len = this.state.value1;
        if(len.length > 8) return 'success';
        else if(len.length > 1) return 'warning';
        return null;        
    } 

    handleClick(){
        
        
       this.setState( {isloading: true});

       setTimeout(() => {
        this.setState({isloading: false});
    }, 2000);
    } 

    
    

    render(){
        const { isloading } = this.state;
        return(
            <Form>

            <FormGroup
          controlId="formControlsEmail"
          validationState={this.getEmailstate()}
            >
          <ControlLabel>Email</ControlLabel>
          <FormControl
            type="Email"
            value={this.state.value}
            placeholder="Enter Email"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          
        </FormGroup>


        <FormGroup
          controlId="formControlsPassword"
          validationState={this.getValidationState()}
            >
          <ControlLabel>Password</ControlLabel>
          <FormControl
            type="password"
            value={this.state.value1}
            placeholder="Enter Password"
            onChange={this.handlePass}  
            
          />
          <FormControl.Feedback />
         
        </FormGroup>


            <Button 
            type="submit" 
            bsStyle={'info'}
            disabled={isloading}
            onClick={!isloading ? this.handleClick : null }
            >{isloading ? 'Loading' : 'Log in'}
            </Button>

           </Form>
        )
    }
} export default Login;
import React, { Component} from 'react';
import { Thumbnail, Col } from 'react-bootstrap';



class Card extends Component{ 
render(){
    return(
        <div>
        <Col xs={2} md={2}>
        <Thumbnail src={this.props.image} alt="242x200" responsive>
        <p>Description</p>
        <hr/>
        <h5>{this.props.description}</h5>
        {this.props.index}
        <hr/>
        </Thumbnail>
        </Col>
        </div>
    );

}


}export default Card;
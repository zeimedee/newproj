import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import Card from './card';
import img from './images/pic.jpg'



class Cardlist extends Component{
        render(){
            var cards =[
                {
                    'image': img,
                    'description': 'new stufff'
                },
                {
                    'image' : 'https://pbs.twimg.com/profile_images/1063476431290884102/GiH_LGFB_400x400.jpg',
                    'description': 'james Bond'
                },
                {
                    'image': require('./images/pic.jpg'),
                    'description': 'Tchalla'
                },
                {
                    'image': img,
                    'description': 'specter'
                },
                {
                    'image': img,
                    'description': 'new stufff'
                },
                {
                    'image': img,
                    'description': 'test'
                },
                {
                    'image': img,
                    'description': 'test2'
                }

            ]
            return(
                <div>
                <br/>
                <Row style={{paddingLeft:'10px'}}>
          
                
                        {cards.map(function(card, index){
                            return<Card 
                                image={card.image}
                                description={card.description}
                                index={index}

                            />
                        })}
                </Row>   
                </div>
            );
        }
}export default Cardlist;

import React,{Component} from 'react';
// import * as React from "react";
import {Card, CardImg, CardBody, CardTitle,Media,CardText} from 'reactstrap';

class DetailedList extends Component{

    render()
    {
       
        const dishDetails=this.props.dishs2;
        const dishComments=dishDetails.comments.map((comment)=>{
               return(
                <div key={comment.id} >
                    <Media tag="li">
                      
                      <Media>{comment.comment}</Media>
                      
                      </Media>
                      <Media tag="li">
                      
               <Media><p>--</p>{comment.author}<p>,</p>{new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"2-digit"}).format(new Date(Date.parse(comment.date)))}</Media>
                      
                      </Media>
                    
                </div>
               );
        });
        return(
            <div className="container">
              <div className="row">
                  <div className="col-12 col-md-5 m-1">
                     <Card>
                      <CardImg src={dishDetails.image}></CardImg>
                      <CardBody>
                       <CardTitle>{dishDetails.name}</CardTitle>
                        <CardText>{dishDetails.description}</CardText>
                       </CardBody>
                      </Card>
                   </div>
                   <div className="col-12 col-md-5 m-1">
                     <h2>Comments</h2>  
                     {dishComments}
                   </div>
                </div>
               
                </div>

            
        );
    }
} 

export default DetailedList;
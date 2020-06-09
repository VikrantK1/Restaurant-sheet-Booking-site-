import React from 'react';
// import * as React from "react";
import {Card, CardImg, CardBody, CardTitle,Media,CardText} from 'reactstrap';

function RanderOnecomment({comment}) {
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
}  

    const DetailedList=(props)=>{
     if(props.dish!=null)
     {
      var dishComments=props.dish.comments.map((comment)=>{
        return(
            <div key={comment.id}>
              <RanderOnecomment comment={comment}/>
            </div>
        );
    });
     return(
      <div className="container">
      <div className="row">
          <div className="col-12 col-md-5 m-1">
             <Card>
              <CardImg src={props.dish.image}></CardImg>
              <CardBody>
               <CardTitle>{props.dish.name}</CardTitle>
                <CardText>{props.dish.description}</CardText>
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
     else{
       return(
         <div></div>
       );
     }

    }
  

export default DetailedList;
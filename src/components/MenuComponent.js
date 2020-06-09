import React  from 'react';
import {Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap'

function MenuRander({dish,onClick}){
    return(

        <div key={dish.id}   className="col-12 col-md-5 m-1">
         <Card onclick={()=>onClick(dish.id)}> 
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            {/* <img src={dish.image} alt={dish.name}></img> */}
           <CardImgOverlay><CardTitle>{dish.name}</CardTitle></CardImgOverlay>

    </Card>
</div>
    );
}


 const Menu=(props)=>{
    const menu=this.props.dishes.map((dish)=>{
        return(
           <MenuRander dish={dish} onclick={props.onClick}/>
        );
    });
      
    return(
        <div className="container">
            <div className="row">
                
                    {menu}
             
            </div>
        </div>
        
      );
 }  
        
      
        
    

export default Menu;
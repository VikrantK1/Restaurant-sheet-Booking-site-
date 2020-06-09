import React  from 'react';
import {Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap'

function MenuRander({dish,onClick}){
    return(

        
         <Card onClick={()=>onClick(dish.id)
            
            }> 
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            {/* <img src={dish.image} alt={dish.name}></img> */}
           <CardImgOverlay><CardTitle>{dish.name}</CardTitle></CardImgOverlay>

    </Card>

    );
}


 const Menu=(props)=>{
    const menu=props.dishes.map((dish2)=>{
        return(
            <div key={dish2.id}   className="col-12 col-md-5 m-1">
           <MenuRander dish={dish2} onClick={props.onClick}/>
           </div>
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
import React,{Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardTitle,CardBody, CardText} from 'reactstrap'
import DetailedList from './DishdetailComponent'
class Menu extends Component{
    constructor(props)
    {
        super(props);
        this.state={selectedDish:null}

        console.log("constructor is called");
      
    }
    onDishselected(dish)
    {
        
        this.setState({selectedDish:dish});
        
        
    }

    // randerDish(dish)
    // {
        
    //     if(dish!=null)
    //     {
        
    //      return(
            
    //          <div>
    //               <Card>
    //                   <CardImg src={dish.image}></CardImg>
    //                   <CardBody>
    //                    <CardTitle>{dish.name}</CardTitle>
    //      <CardText>{dish.description}</CardText>
    //                    </CardBody>
    //                   </Card>
    //          </div>
    //      );
    //     }
    //     else{
    //         console.log("Dish is empty");
    //         return(
    //             <div></div>
    //         );

    //     }
    // }
    randerDish(dish)
    {
        
        if(dish!=null)
        {
        
         return(
            
             <DetailedList dishs2={dish}/>
         );
        }
        else{
            console.log("Dish is empty");
            return(
                <div></div>
            );

        }
    }
    componentDidMount()
    {
        console.log("ComponentDid Mount is called");
    }

    render(){
        
        const menu=this.props.dishes.map((dish)=>{
            return(
                <div key={dish.id}   className="col-12 col-md-5 m-1">
                    <Card onClick={()=>{
                        
                        this.onDishselected(dish);
                        
                    
                    }}>
                            
                            <CardImg width="100%" src={dish.image} alt={dish.name} />
                            {/* <img src={dish.image} alt={dish.name}></img> */}
                           <CardImgOverlay><CardTitle>{dish.name}</CardTitle></CardImgOverlay>
                          
                    </Card>
                </div>
            );
        });
        console.log("constructor is called");
        return(
          <div className="container">
              <div className="row">
                  
                      {menu}
               
              </div>
              {/* <div className="row">
                  <div className="col-12  m-3">
                      {this.randerDish(this.state.selectedDish)}
                    
                  </div>
              </div> */}
              <div className="row">
              {this.randerDish(this.state.selectedDish)}
              </div>

          </div>
          
        );
        
    }

}

export default Menu;
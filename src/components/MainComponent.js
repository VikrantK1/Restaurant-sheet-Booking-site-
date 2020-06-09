import React,{Component}  from 'react';
import Menu from './MenuComponent'
import {DISHES} from '../shared/dishes'
import DetailedList from './DishdetailComponent'
import Header from './HeaderComponent'
import Footer from './FooterComponent'
class Main extends Component  {
    constructor(props)
    {
        super(props);
        this.state={dishes:DISHES,
              onSelectedDishId:null
        }
    }
    onDishselected(dishId)
    {
        
        this.setState({onSelectedDishId:dishId});
       
    }
   
  render()
  {
   
    return (
        <div>
           <Header/>
          <Menu dishes={this.state.dishes} onClick={(dishId)=>this.onDishselected(dishId)} />
          <DetailedList dish={this.state.dishes.filter((dish)=> dish.id===this.state.onSelectedDishId)[0]}/>
          <Footer/>
        </div>
      );
  }
}
export default Main;
import React,{Component}  from 'react';
import {Navbar, NavbarBrand} from 'reactstrap'
import Menu from './components/MenuComponent'
import {DISHES} from '../shared/dishes'
import DetailedList from './DishdetailComponent'
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
          <Navbar dark color="primary">
            <div className="container">
              <NavbarBrand href="/">Restorante Con Fusion</NavbarBrand>
            </div>
          </Navbar>
          <Menu dishes={this.state.dishes} onClick={(dishId)=>this.onDishselected(dishId)} />
          <DetailedList dish={this.state.dishes.filter((dish)=> this.onSelectedDishId===dish.id)[0]}/>
        </div>
      );
  }
}
export default Main;
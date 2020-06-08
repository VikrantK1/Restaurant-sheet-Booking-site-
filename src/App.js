
import React  from 'react';
import {Navbar, NavbarBrand} from 'reactstrap'
import './App.css';
import Menu from './components/MenuComponent'
import {DISHES} from './shared/dishes'

function App() {
  var state={dishes:DISHES}
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Restorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={state.dishes}/>
    </div>
  );
}


export default App;

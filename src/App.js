import React from 'react';
 
import './App.css';
import  Cart from './Cart';

function Welcome(props)
{
  return <h1>Coding</h1>
}





function App() {
  return (
    <div className="App">
        
            <Cart/>
             <Welcome/>
             <Temp/>
                                 
     

    </div>
         
  )}

export default App;

class Temp extends React.Component{

  render()
  {
    return <h1>Codingninjas</h1>
  }


}
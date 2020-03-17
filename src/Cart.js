import React from 'react'
import Cartitem from './Cartitem'

class Cart extends React.Component{

    
    render()
    {
       const  arr=[1,2,3];
         
        
              
            return (

            

                 <div className="Cart">
                   { 
                       
                       <Cartitem qnty={2} title={'Iphone' } price={20000} /> 
                    
                    }
                 </div>
            


            );
        

    }






}


export default Cart;

import React from 'react'

class Cartitem extends React.Component{


    render()
   {
    return (

        <div className="cart-item">
       
       <div className="left-block">
    <h2> Left Block</h2>
       </div>

       <div className="right-block" >
       <h2> Cart</h2>

       <div style={ {color:'#777'}}> Phone  </div>

       <div style= {   styles.div }  >Price</div>
       <div >Action</div>


       <div className="class-item-action">

  Hello , My name Meghraj Deshmukh

       </div>

       </div>


        </div>



    );  

   }

 

}

const styles={

div:{
 
    color:'red'

}


}
export default Cartitem;



 
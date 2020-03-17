import React from 'react'

class Cartitem extends React.Component{

    constructor(qnty)
    {
        super();

        this.state={

            price:300,
            title:"iphone",
            qnty:1,

         


        }
        
       
        

    }
    
    minusqnty=()=>
   {

    this.setState(  (prevState)=>{

       if(this.state.qnty-1<0)
      {

        return;

      }else
    return({
        

        qnty:--this.state.qnty
        

    })

   });
  }
 


    increaseqnty=()=>
    {
        console.log("test");

          
         console.log( this.state.qnty) ;
     

        //  this.setState({

        //     qnty:++this.state.qnty,

        //  })
       
        //second form

        this.setState((prevState) => {


            return({
                qnty:++this.state.qnty
            })

        }
        );
          
       

         
          

    }

   


    render()
   {


    return (

        <div className="cart-item">

       
       <div className="left-block">
        <h2> Left Block</h2>
       </div>

       <div className="right-block" >
       <h2> Cart</h2>

       <div style={ {color:'#777'}}> Phone {this.state.title} </div>

       <div style= {   styles.div }  >Price{this.state.price}</div>


       <div style= {   styles.div }  >quantity{this.state.qnty}</div>



       <div >Action</div>

       
        

       <div className="class-item-action">

       <img src="https://image.flaticon.com/icons/svg/2089/2089588.svg" style={ styles.img }
       onClick={ this.increaseqnty }
       />
   
       <img src="https://image.flaticon.com/icons/svg/1665/1665612.svg" style={ styles.img }  onClick={this.minusqnty}>
       </img>

       </div>

       </div>


        </div>



    );  

   }

 

}

const styles={

div:{
 
    color:'red'

},
  
img:{
   
    width:50,
    height:50,


    
}


}
export default Cartitem;



 
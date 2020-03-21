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
    console.log(this.props);

    const  { title, qnty , price}= this.props.product;

    return (

        

        <div className="cart-item" style={
            {display:"block" , leftMargin:-20 }
        }>

       
       <div className="left">
        <h2> Left Block</h2>
       </div>

       <div className="right" >
       <h2> Cart</h2>

       <div style={ {color:'#777'}}> Phone {title} </div>

       <div style= {   styles.div }  >Price{price}</div>


       <div style= {   styles.div }  >quantity{qnty}</div>



       <div >Action</div>

       
        

       <div className="class-item-action">

       <img src="https://image.flaticon.com/icons/svg/2089/2089588.svg" style={ styles.img }  onClick={()=>this.props.onIncrease(this.props.product)}/>
   
       <img src="https://image.flaticon.com/icons/svg/1665/1665612.svg" style={ styles.img }  onClick={this.minusqnty}>
       </img>

       <img src="  https://image.flaticon.com/icons/svg/1345/1345823.svg" style={ styles.img }  onClick={this.minusqnty} 
        onClick={()=>this.props.del(this.props.product)}>
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



 
import React from 'react'
import Cartitem from './Cartitem'

class Cart extends React.Component{


    constructor()
    {
    super();
 
    
    this.st={
           
        product:[

          {
            title:'iphone',
            qnty:20,
            price:20000,
        },

       {
            title:'Tshirt',
            qnty:230,
            price:2000,
        },

         {
            title:'MiPhone',
            qnty:30,
            price:2000,
        },




       ]
    }

}
 
      handleIncrease=(products)=>{


   console.log("hi please chhange this product");
    
       const {product}=this.st;
       const index=product.indexOf(products);
       console.log(product[index]);

       product[index].qnty+=1;
    
        this.setState({

            product:product

        })

 
}

deleteit=(products)=>{


     
      const {product}=this.st;

       
 


    // product.slice(0,1);

    const index=product.indexOf(products);
    //  console.log(index);


    //      product.slice(index,1);

         

    // console.log(index);
    //  const item=product.slice(index,1);
    
          
     //console.log(item);

     //product.pop();

     //console.log(product);
     product.splice(index,1);

    console.log(product);
        
       

     this.setState({

         product:product

     })


}

    
    render()
    {
        const {product} =this.st;
        
     
            return( 

                 <div className="Cart">
                   
                       
                  
                      
                      {
                      product.map((item)=>{

                 return <Cartitem product={item}
                        onIncrease={this.handleIncrease}
                        del={this.deleteit}
                 /> 
                      


                      })}
                     
                      
                
                 </div>
            


            );
        

    }






}


export default Cart;

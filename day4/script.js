// today we have solved promise question on Day 4 
// so its a mix up of javascript + dsa

// const GIT_HUB_URL = "https://api.github.com/users/shivamkapsa";

//  const user = fetch(GIT_HUB_URL)
// .then((response) => response.json())
// .then( (data) => console.log(data))
// .catch( (error) => console.log(error));


// console.log(user)

const cart = ['paints', 'shirts', 'kurta'];

const promise = createOrder(cart); // order id 

promise.then(function(orderId){
    console.log(orderId)
    // proceedToPayment
})

// producer

function createOrder(cart){
     const pr = new Promise( function(resolve, reject){
          // createOrder
          // validateCart
          // orderId  
       
          if(!validateCart(cart)){
           const error = new Error('Cart is not valid');
           reject(error);
          }
       
          // logic for create order
           const orderId = '12345';
           if(orderId){
            resolve(orderId);
           }
       })

       return pr;
}

function validateCart(cart){
   return true
}






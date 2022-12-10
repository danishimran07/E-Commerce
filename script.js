const values = document.getElementsByClassName('values');
const addValue =document.getElementById('addValue');
const quantity = document.getElementsByClassName('quantity');
const cartValue = document.getElementById('cartValue');
const showItems = document.querySelector('.cart');
const toggleCart = document.querySelector('.show-cart');
const lightBox = document.querySelector('.light-box');
const slideButton = document.querySelectorAll('.slide-button') 
const garally = document.querySelectorAll('.garally img') ;
const menu = document.querySelector('.menu');
const navlinks = document.querySelector('.navlinks');
const closeButton = document.querySelector('.navlinks img');



const Price = 125.00;
let pointer = 0;
//const cartItems = document.querySelector('.cartItems');


let count =0;
let cartaddedValue = 0; 
function increment(){
    if(count>=0){
        count+=1;
       return quantity[0].innerText=count;
    }
}
function decrement(){
    if(count>0){
        count-=1;
        if (count <0){
            count =0;
        }  
        else {
            return quantity[0].innerText=count;
        }
    }
}

function handleClick(){
    cartaddedValue+=count;
    count =0;
    quantity[0].innerText=count;
    cartValue.innerText=cartaddedValue;
    if(cartaddedValue>0){
        cartValue.style.display ='inline'

    }
    toggleCart.innerHTML=`<h4>cart</h4>
    <hr>
    <div class="cartItems">
      <img src="./images/image-product-1-thumbnail.jpg" alt="">
      <div>
        <p>Fall Limited Edition Sneakers</p>
        <div><p> $ ${Price}X <span>${cartaddedValue}</span></p><h4>$ <span>${Price*cartaddedValue}</span></h4></div>
      </div>
      <img src="./images/icon-delete.svg" alt="" class="delete">
    </div>
    <button>Checkout</button>`;
    const deleteItem = document.querySelector('.delete');
    deleteItem.addEventListener('click', clearCart)


//console.log(deleteItem)

}

function handleCart(){
    toggleCart.classList.toggle('toggle')
}

function clearCart(){
    
    cartaddedValue=0
    toggleCart.innerHTML='Cart empty';
    cartValue.innerText=cartaddedValue;
    cartValue.style.display ='none'
}

function slider(select){
   pointer+=select;
   if(pointer >0 && pointer<5){  
     lightBox.attributes[0].value=`./images/image-product-${pointer}.jpg`
}

}
function slider2(i){
    lightBox.attributes[0].value=`./images/image-product-${i}.jpg`
}

for (let i=0; i<4; i++ ){
    garally[i].addEventListener('click', ()=>slider2(i+1));

}

function handleMenu(toggle){
    if(toggle){
        navlinks.style.display='flex';
    }
    else{
        navlinks.style.display='none';
    }
}

addValue.addEventListener('click', handleClick);
values[0].addEventListener('click', decrement);
values[1].addEventListener('click', increment);
showItems.addEventListener('click', handleCart);
slideButton[0].addEventListener('click', ()=>slider(-1));
slideButton[1].addEventListener('click', ()=>slider(1));
menu.addEventListener('click',()=> handleMenu(true))
closeButton.addEventListener('click', ()=>handleMenu(false))



//;


const values = document.getElementsByClassName('values');
const addValue =document.getElementById('addValue');
const quantity = document.getElementsByClassName('quantity');
const cartValue = document.getElementById('cartValue');
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
    cartValue.innerText=cartaddedValue;
    if(cartaddedValue>0){
        cartValue.style.display ='inline'

    }
}

addValue.addEventListener('click', handleClick);
values[0].addEventListener('click', decrement);
values[1].addEventListener('click', increment);

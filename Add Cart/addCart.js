const select1=document.querySelectorAll('.cart2');
const select2=document.querySelectorAll('.cart');
const btn=document.querySelectorAll("button");
let value=0;
select1.forEach(right=>{
    right.addEventListener('click',()=>{
    --value;
  console.log(value);      
    })
})
     
select2.forEach(right=>{
    right.addEventListener('click',()=>{
  ++value;
  console.log(value);      
    })
})


btn.forEach(item=>{
    item.addEventListener('click',()=>{
       console.log("hello");
    })
})

const result=document.querySelectorAll('.cart');
const result1=document.querySelector('.cart2');
result.forEach((item)=>{
  item.querySelector('span').innerHTML = `${value}`;
})
// result.querySelector('span').textContent=`${value}`;

// result1.querySelector('span').innerHTML=`${value}`;
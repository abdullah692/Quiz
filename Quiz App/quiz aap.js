// const correctAns=['C','B','A','D','A'];
// const form =document.querySelector(".quiz-form");
// const result=document.querySelector(".result");

// form.addEventListener('submit', e=>{
//     e.preventDefault();
   
//     let score=0;
//     const userAns=[form.q1.value,form.q2.value,form.q3.value,form.q4.value,form.q5.value];

//     userAns.forEach((answer,index)=>{
//         if(answer ==correctAns[index])
//         {
//             score+=20;
//         }
//     })
//     scrollTo(0,0);
//     result.querySelector("span").textContent=`${score}%`;
//     result.classList.remove('d-none');
    

// });





//Correct ANswer
const CorAns=['C','B','A','D','A'];
const form=document.querySelector('.quiz-form'); //Accessing the form
const result=document.querySelector('.result');
//calling submit event
form.addEventListener('submit', e=>{
e.preventDefault();

let score=0;
//user input answer
const userAns=[form.q1.value,form.q2.value,form.q3.value,form.q4.value,form.q5.value];
//checking the user input ans with corect ans with for each loop
 userAns.forEach((answer,index)=>{
    if(answer===CorAns[index])
    {
      score+=20;
    }
})
//used to scroll to up
   scrollTo(0,0);
//   result.querySelector('span').innerHTML=`${score}%`;
  result.classList.remove('d-none')

  //used for animating 
  let output=0;
  const time=setInterval(()=>{
    result.querySelector('span').innerHTML=`${output}%`;
    if(output===score)
    {
        clearInterval(time);
    }
    else
    {
        output++;
    }
  },10);
})
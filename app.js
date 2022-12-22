const question=[
    {
        'que':'which of the following is a markup language?',
        'a':'HTML',
        'b':'CSS',
        'c':'JavaScript',
        'd':'Php',
        'correct':'a'

    },
    {
        'que':'What year was Javascript lanched?',
        'a':'1996',
        'b':'1995',
        'c':'1994',
        'd':'None of these',
        'correct':'b'

    },
    {
        'que':'What does css stands for?',
        'a':'Hypertext Markup Language',
        'b':'Cascading Style sheet',
        'c':'Josan Object Noasan',
        'd':'Helicoperts terminal',
        'correct':'b'

    },
   
]
let index=0;
let total =question.length;
let right=0, wrong=0;
const quesBox=document.getElementById('quesBox');
const optionInputs=document.querySelectorAll('.options')
function loadQuestion(){
    if(index=== total){
        return endQwiz();
    }
    reset();

const data=question[index];
quesBox.innerText=`${index+1}) ${data.que}`;
optionInputs[0].nextElementSibling.innerText=data.a;
optionInputs[1].nextElementSibling.innerText=data.b;
optionInputs[2].nextElementSibling.innerText=data.c;
optionInputs[3].nextElementSibling.innerText=data.d;

}

 function submitQwiz(){
    const data=question[index];
  const ans=getAswer()
  if(ans===data.correct){
     right++;
  }else{
    wrong++;

  }
  index++;
  loadQuestion();
  return;
      
 }
 
 function getAswer(){
    let answer;
    optionInputs.forEach(
    (input) =>{
        if(input.checked){
        answer=input.value;
        
        }
    }

    )
    return answer;
 }

 function reset(){
    optionInputs.forEach(
        (input) =>{
            input.checked=false;
        }
    )
 }
 function endQwiz(){
      document.getElementById("box").innerHTML=`
      <div style="text-align-center">
      <h3>Thank you for attemting the qwiz question </h3>
      <h2>${right}/
      ${total} are correct</h2>
      </div>
      `
 }
 
loadQuestion();
let correctAnswers = ['B','B','B','B','B']
let form = document.querySelector('.myForm');
let uls = document.querySelectorAll('ul');
let result = document.querySelector('h1');
let input = document.querySelectorAll('input');
let submit = document.querySelector('submit');


let myfnct =(e)=>{
    e.preventDefault();
    
    console.log(input[0].value)
    console.log(input)

    
    let score = 0;
    for(let i = 0;i< input.length;i++){
        if(input[i].value === correctAnswers[i]){
            console.log('the answer is right');
            score += 25;
        }else {
            console.log('this is not rigth')
        }
    }

    let output = 0;
    const timer = setInterval(() => {
        result.textContent = `${output}%`;
        if(output === score){
            clearInterval(timer);
        }else{
            output++;
        }
    },10);
}


form.addEventListener("submit", myfnct);





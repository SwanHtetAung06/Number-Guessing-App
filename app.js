//DOM manipulation
const input = document.getElementById("input");
const output = document.getElementById("output");
const answer =document.getElementById("answer");
const total = document.getElementById("total");
const guessData = document.getElementById("guessData");
const guessBtn = document.getElementById("guess")
const container = document.querySelector(".container");

let count = 0;
//Btn handling
guessBtn.addEventListener('click', ((e) => {
    if(input.value === ''){
        errorHandling();
    } else{
        count += 1;
        e.preventDefault();
        const data = input.value;
        let randomNum =  Math.floor(Math.random() * 10 + 1);
        processCore(data,randomNum);
        console.log(data,randomNum);
        total.innerHTML = `Total guess is ${count}`;
        output.style.marginBottom = "2em";
        processData(data);
    };
}));

//processing the core
const processCore = (data,random) => {
    output.style.color = "grey";
    if(data == random){
        answer.innerHTML = "Correct!"
    } 
    if(data > random){
        answer.innerText = "Your guess is too high!";
    } 
     if(data < random){
        answer.innerHTML = "Your guess is too low!"
    };
};
const processData = (data) => {

    guessData.innerHTML = `Your previous data was ${data}`;
};
function errorHandling(){
    const div = document.createElement('div');
    const bodyHandle = document.body;
    div.classList.add('error');
    div.appendChild(document.createTextNode("fill in the blank first!"));
    bodyHandle.appendChild(div);
    bodyHandle.insertBefore(div,container);
    setTimeout(() => {
        div.remove();
    },2000);
};  




